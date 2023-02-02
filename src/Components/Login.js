import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useState } from "react";
import Google from "./Google";

export default function Form(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            signInWithEmailAndPassword(getAuth(), email, password)
              .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
              })
              .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage);
              });
          }}
        >
          <h1>{props.title}</h1>
          <input
            type="email"
            placeholder="Email"
            value={props.email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={props.password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
        <Google title="Sign In with Google" />
      </div>
    </>
  );
}
