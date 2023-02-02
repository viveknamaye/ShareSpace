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

function Form({ user, setUser, changed, setChanged, image, setImage }) {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setDoc(doc(collection(getFirestore(), "user"), user.uid), user);
        }}
      >
        <h1>Profile</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "fit-content",
              height: "fit-content",
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
          <div
            style={{
              marginLeft: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  marginRight: "10px",
                }}
              >
                <label
                  for="fname"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  First name
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-black light:focus:ring-blue-500 light:focus:border-blue-500"
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
              <div>
                <label
                  for="lname"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  className="bg-gray-50 border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-black light:focus:ring-blue-500 light:focus:border-blue-500"
                  id="lname"
                  placeholder="Last Name"
                  name="lname"
                  value={user.lname}
                  onChange={(e) => {
                    setChanged(true);
                    setUser({ ...user, lname: e.target.value });
                  }}
                />
              </div>
            </div>
            <br />

            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Email
              </label>
              <input
                type="email"
                className="bg-gray-50 border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-black light:focus:ring-blue-500 light:focus:border-blue-500"
                id="email"
                placeholder="Email"
                name="email"
                value={user.email}
                onChange={(e) => {
                  setChanged(true);
                  setUser({ ...user, email: e.target.value });
                }}
              />
            </div>

            <br />
            <div>
              <label
                for="bio"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              >
                Bio
              </label>
              <textarea
                type="text"
                className="bg-gray-50 border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-black light:focus:ring-blue-500 light:focus:border-blue-500"
                id="bio"
                placeholder="Bio"
                name="bio"
                value={user.preferance.bio}
                onChange={(e) => {
                  setChanged(true);
                  setUser({ ...user, bio: e.target.value });
                }}
              />
            </div>
          </div>
        </div>
        <hr
          style={{
            color: "gray",
            backgroundColor: "gray",
            height: 1,
            borderColor: "gray",
            margin: "20px 0",
          }}
        />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            gridGap: "25px",
            margin: "0 20px",
          }}
        >
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              htmlFor="street"
            >
              Street
            </label>
            <input
              type="text"
              id="street"
              className="bg-gray-50 border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-black light:focus:ring-blue-500 light:focus:border-blue-500"
              name="street"
              value={user.address.street}
              onChange={(e) =>
                setUser({
                  ...user,
                  address: { ...user.address, street: e.target.value },
                })
              }
            />
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              htmlFor="city"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              className="bg-gray-50 border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-black light:focus:ring-blue-500 light:focus:border-blue-500"
              name="city"
              value={user.address.city}
              onChange={(e) =>
                setUser({
                  ...user,
                  address: { ...user.address, city: e.target.value },
                })
              }
            />
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              htmlFor="state"
            >
              State
            </label>
            <input
              type="text"
              id="state"
              className="bg-gray-50 border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-black light:focus:ring-blue-500 light:focus:border-blue-500"
              name="state"
              value={user.address.state}
              onChange={(e) =>
                setUser({
                  ...user,
                  address: { ...user.address, state: e.target.value },
                })
              }
            />
          </div>

          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              htmlFor="pincode"
            >
              Pincode
            </label>
            <input
              type="number"
              className="bg-gray-50 border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-black light:focus:ring-blue-500 light:focus:border-blue-500"
              id="pincode"
              name="pincode"
              value={user.address.pincode}
              onChange={(e) =>
                setUser({
                  ...user,
                  address: { ...user.address, pincode: e.target.value },
                })
              }
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "20px 20px",
          }}
        >
          <div>
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
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
            <label
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              htmlFor="gym"
            >
              Gym
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              id="smoking"
              name="smoking"
              value={user.preferance.smoking}
              onChange={(e) => {
                setChanged(true);

                setUser({
                  ...user,
                  preferance: {
                    ...user.preferance,
                    smoking: e.target.value,
                  },
                });
              }}
            />
            <label
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              htmlFor="smoking"
            >
              Smoking
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              id="pets"
              name="pets"
              value={user.preferance.pets}
              onChange={(e) => {
                setChanged(true);

                setUser({
                  ...user,
                  preferance: {
                    ...user.preferance,
                    pets: e.target.value,
                  },
                });
              }}
            />
            <label
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              htmlFor="pets"
            >
              Pets
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              id="lateNight"
              name="lateNight"
              value={user.preferance.lateNight}
              onChange={(e) => {
                setChanged(true);

                setUser({
                  ...user,
                  preferance: {
                    ...user.preferance,
                    lateNight: e.target.value,
                  },
                });
              }}
            />
            <label
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              htmlFor="lateNight"
            >
              Late Night
            </label>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "auto auto auto",
            gridGap: "20px",
          }}
        >
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              htmlFor="food"
            >
              Food
            </label>
            <select
              id="food"
              name="food"
              className="bg-gray-50 border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-black light:focus:ring-blue-500 light:focus:border-blue-500"
              value={user.preferance.food}
              // style={{
              //   height: "fit-content",
              // }}
              onChange={(e) => {
                setChanged(true);

                setUser({
                  ...user,
                  preferance: {
                    ...user.preferance,
                    food: e.target.value,
                  },
                });
              }}
            >
              <option value="veg">Veg</option>
              <option value="non-veg">Non-Veg</option>
              <option value="both">Both</option>
            </select>
          </div>
          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              htmlFor="workingHours"
            >
              Working Hours
            </label>
            <input
              type="number"
              id="workingHours"
              placeholder="Working Hours"
              className="bg-gray-50 border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400 light:text-black light:focus:ring-blue-500 light:focus:border-blue-500"
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
          </div>

          <div>
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
              htmlFor="occupation"
            >
              Occupation
            </label>
            <select
              id="occupation"
              name="occupation"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 light:bg-gray-700 dark:border-gray-600 light:placeholder-gray-400 light:text-white light:focus:ring-blue-500 light:focus:border-blue-500"
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
          </div>
        </div>
        {!changed ? (
          <></>
        ) : (
          <input
            type="submit"
            value="Submit"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          />
        )}
        {!changed ? (
          <Link
            to="/"
            style={{
              textDecoration: "none",
            }}
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 light:bg-gray-800 light:text-white light:border-gray-600 light:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Continue
          </Link>
        ) : (
          <></>
        )}
      </form>
    </>
  );
}

export default function Profile(props) {
  const [image, setImage] = useState("");
  const [changed, setChanged] = useState(false);
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    address: {
      street: "",
      city: "",
      state: "",
      pincode: "",
    },
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
        <div
          className=" p-6 bg-white border border-gray-200 rounded-lg shadow light:bg-gray-800 light:border-gray-700"
          style={{
            width: "65%",
            padding: "5px",
            display: "flex",
          }}
        >
          <div
            style={{
              width: "30%",
              height: "100%",
              padding: "5px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          ></div>
          <div
            style={{
              width: "1px",
              backgroundColor: "#000000",
              height: "80vh",
              margin: "20px",
            }}
          ></div>
          <div
            style={{
              width: "70%",
            }}
          >
            <Form
              user={user}
              setUser={setUser}
              changed={changed}
              setChanged={setChanged}
              image={image}
              setImage={setImage}
            />
          </div>
        </div>
      </div>
    </>
  );
}
