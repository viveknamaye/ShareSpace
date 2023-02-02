import { useEffect, useState } from "react";
import { getFirestore, collection, doc, setDoc } from "firebase/firestore";
import { ref, getDownloadURL, uploadBytes, getStorage } from "firebase/storage";
import { getDoc } from "firebase/firestore";
import { Link } from "react-router-dom";
import VirticalNav from "./VerticalNav";

function EditIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        d="M9.21617 23.3333H6.41613C5.8328 23.3333 5.24947 22.9833 5.01613 22.5167C4.66613 22.05 4.66613 21.5833 4.89947 21C6.29947 17.7333 9.4495 15.5167 13.0662 15.5167C16.6828 15.5167 19.7162 12.4833 19.7162 8.86666C19.7162 5.24999 16.6828 2.33333 12.9495 2.33333C9.33284 2.33333 6.29947 5.36666 6.29947 8.98333C6.29947 11.0833 7.2328 12.95 8.74951 14.1167C6.06613 15.1667 3.7328 17.3833 2.56613 20.1833C2.09947 21.35 2.21613 22.75 2.91613 23.8C3.7328 24.9667 4.89947 25.6667 6.29947 25.6667H9.0995C9.79951 25.6667 10.2662 25.2 10.2662 24.5C10.2662 23.8 9.91617 23.3333 9.21617 23.3333ZM8.63284 8.98333C8.63284 6.64999 10.6162 4.66666 12.9495 4.66666C15.2828 4.66666 17.2662 6.64999 17.2662 8.98333C17.2662 11.3167 15.2828 13.3 12.9495 13.3C10.6162 13.3 8.63284 11.3167 8.63284 8.98333Z"
        fill="white"
      />
      <path
        d="M24.7328 12.8333C23.5661 11.6667 21.5828 11.6667 20.4161 12.8333L14.2328 19.0167C12.8328 20.4167 12.0161 22.4 12.0161 24.5C12.0161 25.2 12.4828 25.6667 13.1828 25.6667C15.2828 25.6667 17.1494 24.85 18.6661 23.45L24.8494 17.2667C25.4328 16.6833 25.7828 15.8667 25.7828 15.05C25.7828 14.2333 25.3161 13.4167 24.7328 12.8333ZM23.0994 15.6333L16.9161 21.8167C16.2161 22.5167 15.3994 22.9833 14.4661 23.2167C14.6994 22.2833 15.1661 21.4667 15.8661 20.7667L22.0494 14.5833C22.1661 14.4667 22.3994 14.35 22.6328 14.35C22.8661 14.35 22.9828 14.4667 23.0994 14.5833C23.2161 14.7 23.3328 14.9333 23.3328 15.05C23.3328 15.1667 23.2161 15.4 23.0994 15.6333Z"
        fill="white"
      />
    </svg>
  );
}

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
      getDoc(doc(collection(getFirestore(), "user"), props.user.uid)).then(
        (doc) => {
          if (doc.exists()) {
            setUser({
              uid: props.user.uid,
              phoneNumber: props.user.phoneNumber,
              ...user,
              ...doc.data(),
            });
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }
        }
      );
    }
    if (props.user.phoneNumber) {
      getDownloadURL(ref(getStorage(), `profile/${props.user.uid}`)).then(
        (url) => {
          console.log("url", url);
          setImage(url);
        }
      );
    }
  }, [props.user]);

  return (
    <>
      <h1>Update Profile</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "25%",
            height: "80vh",
            padding: "5px",
          }}
        >
          <VirticalNav />
        </div>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setDoc(doc(collection(getFirestore(), "user"), user.uid), user);
            }}
          >
            <div
              style={{
                position: "relative",
                width: "fit-content",
              }}
            >
              <img
                src={image}
                alt=""
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "#637AF6",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => {
                  document.getElementById("image").click();
                }}
              >
                <EditIcon />
              </div>
              <input
                type="file"
                id="image"
                name="image"
                style={{ display: "none" }}
                onChange={() => {
                  const file = document.getElementById("image").files[0];
                  uploadBytes(
                    ref(getStorage(), `profile/${user.uid}`),
                    file
                  ).then((snapshot) => {
                    console.log("Uploaded a blob or file!");
                  });
                }}
              />
            </div>

            <div>
              <label
                for="fname"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First name
              </label>
              <input
                type="text"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                id="fname"
                placeholder="First Name"
                name="fname"
                value={user.fname}
                onChange={(e) => {
                  setChanged(true);
                  setUser({ ...user, fname: e.target.value });
                }}
              />
            </div>
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
                  preferance: {
                    ...user.preferance,
                    workingHours: e.target.value,
                  },
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
                  preferance: {
                    ...user.preferance,
                    occupation: e.target.value,
                  },
                });
              }}
            >
              <option value="student">Student</option>
              <option value="employed">Employed</option>
              <option value="unemployed">Unemployed</option>
            </select>
            <br />

            {!changed ? <></> : <input type="submit" value="Submit" />}
            {!changed ? <Link to="/">Continue</Link> : <></>}
          </form>
        </div>
      </div>
    </>
  );
}
