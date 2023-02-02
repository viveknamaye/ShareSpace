import { useEffect, useState } from "react";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes, getStorage } from "firebase/storage";

export default function Profile(props) {
  const [image, setImage] = useState("");
  const [changed, setChanged] = useState(false);
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    preferance: {
      gym: false,
      smoking: false,
      pets: false,
      lateNight: false,
      food: "veg",
      workingHours: "5",
      occupation: "student",
      bio: "",
    },
  });

  useEffect(() => {
    if (props.user) {
      setUser({
        uid: props.user.uid,
        phoneNumber: props.user.phoneNumber,
        ...user,
      });
    }
    if (!props.user.phoneNumber) {
      getDownloadURL(ref(getStorage(), `profile/${user.uid}`)).then((url) => {
        setImage(url);
      });
    }
  }, [props.user]);

  return (
    <div>
      <h1>Update Profile</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setDoc(doc(collection(getFirestore(), "user"), user.uid), user);
        }}
      >
        <img src={image} alt="" />
        <label htmlFor="image">Change</label>
        <input
          type="file"
          id="image"
          name="image"
          onChange={() => {
            const file = document.getElementById("image").files[0];
            uploadBytes(ref(getStorage(), `profile/${user.uid}}`), file).then(
              (snapshot) => {
                console.log("Uploaded a blob or file!");
              }
            );
          }}
        />
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          id="fname"
          placeholder="First Name"
          name="fname"
          value={user.fname}
          onChange={(e) => {
            setChanged(true);
            setUser({ ...user, fname: e.target.value });
          }}
        />
        <br />
        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          placeholder="Last Name"
          name="lname"
          value={user.lname}
          onChange={(e) => {
            setChanged(true);
            setUser({ ...user, lname: e.target.value });
          }}
        />
        <br />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="Email"
          name="email"
          value={user.email}
          onChange={(e) => {
            setChanged(true);

            setUser({ ...user, email: e.target.value });
          }}
        />
        <br />

        <label htmlFor="bio">Bio</label>
        <input
          type="text"
          id="bio"
          placeholder="Bio"
          name="bio"
          value={user.preferance.bio}
          onChange={(e) => {
            setChanged(true);

            setUser({
              ...user,
              preferance: { ...user.preferance, bio: e.target.value },
            });
          }}
        />
        <br />

        <label htmlFor="gym">Gym</label>
        <input
          type="checkbox"
          id="gym"
          name="gym"
          value={user.preferance.gym}
          onChange={(e) => {
            setChanged(true);

            setUser({
              ...user,
              preferance: { ...user.preferance, gym: e.target.value },
            });
          }}
        />
        <br />

        <label htmlFor="smoking">Smoking</label>
        <input
          type="checkbox"
          id="smoking"
          name="smoking"
          value={user.preferance.smoking}
          onChange={(e) => {
            setChanged(true);

            setUser({
              ...user,
              preferance: { ...user.preferance, smoking: e.target.value },
            });
          }}
        />
        <br />

        <label htmlFor="pets">Pets</label>
        <input
          type="checkbox"
          id="pets"
          name="pets"
          value={user.preferance.pets}
          onChange={(e) => {
            setChanged(true);

            setUser({
              ...user,
              preferance: { ...user.preferance, pets: e.target.value },
            });
          }}
        />
        <br />

        <label htmlFor="lateNight">Late Night</label>
        <input
          type="checkbox"
          id="lateNight"
          name="lateNight"
          value={user.preferance.lateNight}
          onChange={(e) => {
            setChanged(true);

            setUser({
              ...user,
              preferance: { ...user.preferance, lateNight: e.target.value },
            });
          }}
        />
        <br />

        <label htmlFor="food">Food</label>
        <select
          id="food"
          name="food"
          value={user.preferance.food}
          onChange={(e) => {
            setChanged(true);

            setUser({
              ...user,
              preferance: { ...user.preferance, food: e.target.value },
            });
          }}
        >
          <option value="veg">Veg</option>
          <option value="non-veg">Non-Veg</option>
          <option value="both">Both</option>
        </select>
        <br />

        <label htmlFor="workingHours">Working Hours</label>
        <input
          type="number"
          id="workingHours"
          placeholder="Working Hours"
          name="workingHours"
          value={user.preferance.workingHours}
          onChange={(e) => {
            setChanged(true);

            setUser({
              ...user,
              preferance: { ...user.preferance, workingHours: e.target.value },
            });
          }}
        />
        <br />

        <label htmlFor="occupation">Occupation</label>
        <select
          id="occupation"
          name="occupation"
          value={user.preferance.occupation}
          onChange={(e) => {
            setChanged(true);
            setUser({
              ...user,
              preferance: { ...user.preferance, occupation: e.target.value },
            });
          }}
        >
          <option value="student">Student</option>
          <option value="employed">Employed</option>
          <option value="unemployed">Unemployed</option>
        </select>
        <br />

        {!changed ? <></> : <input type="submit" value="Submit" />}
      </form>
    </div>
  );
}
