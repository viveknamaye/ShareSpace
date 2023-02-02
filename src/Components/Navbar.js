import { useEffect, useState } from "react";

import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import { addDoc, getDoc } from "firebase/firestore";

export default function Navbar(props) {
  const [user, setUser] = useState({});
  useEffect(() => {
    if (props.user) {
      getDoc(doc(collection(getFirestore(), "user"), props.user.uid)).then(
        (doc) => {
          if (doc.exists()) {
            setUser(doc.data());
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        }
      );
    }
  }, [props.user]);
  return (
    <div>
      <h1>Navbar</h1>
      <h1>{user ? `${user.fname} ${user.lname}` : "Not Logged In"}</h1>
    </div>
  );
}
