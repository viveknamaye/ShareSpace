import { addDoc, collection, getFirestore } from "firebase/firestore";
import { useState } from "react";

export default function RentForm(props) {
  const [rent, setRent] = useState({
    rent: "",
    address: {
      street: "",
      city: "",
      state: "",
      pincode: "",
    },
    contact: "",
    description: "",
    ac: false,
    wifi: false,
    parking: false,
    tenant: "student",
    availability: 50,
    drinking: false,
    smoking: false,
    gender: "boy",
    food: "veg",
    lateNight: false,
    pets: false,
    sqft: 100,
    // images: [],
  });
  return (
    <>
      <h1>Rent Form</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          //   console.log(rent);
          addDoc(collection(getFirestore(), "room"), rent).then((snap) => {
            console.log("Document written with ID: ", snap);
          });
        }}
      >
        <label htmlFor="rent">Rent</label>
        <input
          type="number"
          id="rent"
          name="rent"
          value={rent.rent}
          onChange={(e) => setRent({ ...rent, rent: e.target.value })}
        />
        <br />
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          name="street"
          value={rent.address.street}
          onChange={(e) =>
            setRent({
              ...rent,
              address: { ...rent.address, street: e.target.value },
            })
          }
        />
        <br />
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          value={rent.address.city}
          onChange={(e) =>
            setRent({
              ...rent,
              address: { ...rent.address, city: e.target.value },
            })
          }
        />
        <br />
        <label htmlFor="state">State</label>
        <input
          type="text"
          id="state"
          name="state"
          value={rent.address.state}
          onChange={(e) =>
            setRent({
              ...rent,
              address: { ...rent.address, state: e.target.value },
            })
          }
        />
        <br />
        <label htmlFor="pincode">Pincode</label>
        <input
          type="number"
          id="pincode"
          name="pincode"
          value={rent.address.pincode}
          onChange={(e) =>
            setRent({
              ...rent,
              address: { ...rent.address, pincode: e.target.value },
            })
          }
        />
        <br />
        <label htmlFor="contact">Contact</label>
        <input
          type="number"
          id="contact"
          name="contact"
          value={rent.contact}
          onChange={(e) => setRent({ ...rent, contact: e.target.value })}
        />
        <br />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          name="description"
          value={rent.description}
          onChange={(e) => setRent({ ...rent, description: e.target.value })}
        />
        <br />
        <label htmlFor="ac">AC</label>
        <input
          type="checkbox"
          id="ac"
          name="ac"
          value={rent.ac}
          onChange={(e) => setRent({ ...rent, ac: e.target.value })}
        />
        <br />
        <label htmlFor="wifi">Wifi</label>
        <input
          type="checkbox"
          id="wifi"
          name="wifi"
          value={rent.wifi}
          onChange={(e) => setRent({ ...rent, wifi: e.target.value })}
        />
        <br />
        <label htmlFor="parking">Parking</label>
        <input
          type="checkbox"
          id="parking"
          name="parking"
          value={rent.parking}
          onChange={(e) => setRent({ ...rent, parking: e.target.value })}
        />
        <br />
        <label htmlFor="tenant">Tenant</label>
        <select
          id="tenant"
          name="tenant"
          value={rent.tenant}
          onChange={(e) => setRent({ ...rent, tenant: e.target.value })}
        >
          <option value="student">Student</option>
          <option value="working">Working</option>
        </select>
        <br />
        <label htmlFor="availability">Availability</label>
        <input
          type="number"
          id="availability"
          name="availability"
          value={rent.availability}
          onChange={(e) => setRent({ ...rent, availability: e.target.value })}
        />
        <br />
        <label htmlFor="drinking">Drinking</label>
        <input
          type="checkbox"
          id="drinking"
          name="drinking"
          value={rent.drinking}
          onChange={(e) => setRent({ ...rent, drinking: e.target.value })}
        />
        <br />
        <label htmlFor="smoking">Smoking</label>
        <input
          type="checkbox"
          id="smoking"
          name="smoking"
          value={rent.smoking}
          onChange={(e) => setRent({ ...rent, smoking: e.target.value })}
        />
        <br />
        <label htmlFor="gender">Gender</label>
        <select
          id="gender"
          name="gender"
          value={rent.gender}
          onChange={(e) => setRent({ ...rent, gender: e.target.value })}
        >
          <option value="boys">Boys</option>
          <option value="girls">Girls</option>
        </select>
        <br />
        <label htmlFor="food">Food</label>
        <select
          id="food"
          name="food"
          value={rent.food}
          onChange={(e) => setRent({ ...rent, food: e.target.value })}
        >
          <option value="veg">Veg</option>
          <option value="non-veg">Non-Veg</option>
        </select>
        <br />
        <label htmlFor="lateNight">Late Night</label>
        <input
          type="checkbox"
          id="lateNight"
          name="lateNight"
          value={rent.lateNight}
          onChange={(e) => setRent({ ...rent, lateNight: e.target.value })}
        />
        <br />
        <label htmlFor="pets">Pets</label>
        <input
          type="checkbox"
          id="pets"
          name="pets"
          value={rent.pets}
          onChange={(e) => setRent({ ...rent, pets: e.target.value })}
        />
        <br />
        <label htmlFor="sqft">Sqft</label>
        <input
          type="number"
          id="sqft"
          name="sqft"
          value={rent.sqft}
          onChange={(e) => setRent({ ...rent, sqft: e.target.value })}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}
