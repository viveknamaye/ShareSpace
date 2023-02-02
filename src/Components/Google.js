import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";

export default function Google(props) {
  return (
    <div>
      <button
        onClick={() => {
          const auth = getAuth();
          const provider = new GoogleAuthProvider();
          provider.addScope(
            "https://www.googleapis.com/auth/contacts.readonly"
          );
          signInWithPopup(auth, provider)
            .then((result) => {
              // This gives you a Google Access Token. You can use it to access the Google API.
              // const credential =
              //   GoogleAuthProvider.credentialFromResult(result);
              // const token = credential.accessToken;
              const user = result.user;
              setDoc(doc(collection(getFirestore(), "user"), user.uid), {
                email: user.email,
                uid: user.uid,
              });
              console.log(user);
            })
            .catch((error) => {
              // const errorCode = error.code;
              // const errorMessage = error.message;
              // const email = error.customData.email;
              // const credential = GoogleAuthProvider.credentialFromError(error);
            });
        }}
      >
        {props.title}
      </button>
    </div>
  );
}
