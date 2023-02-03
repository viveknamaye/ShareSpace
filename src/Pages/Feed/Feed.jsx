// import React from 'react'

// const Feed = () => {
//   return (
//     <>
//       <Sidebar />
//       <div>Feed</div>
//     </>
//   )
// }

// export default Feed
import SearchBar from "../../Components/SearchBar/SearchBar";
import { useEffect, useState } from "react";
import "./Feed.css";
import FeedCard from "../../Components/FeedCard/FeedCard";
import Sidebar from "../../Components/Sidebar/Sidebar";
import { collection, getDoc, getFirestore, doc } from "firebase/firestore";

function updateData(pdata, setFeed, filter) {
  // Rent
  let temp = [];
  if (filter.rent !== "") {
    const range = filter.rent.split("-");
    for (let i = 0; i < pdata.length; i++) {
      if (
        parseInt(pdata[i].rent) >= parseInt(range[0]) &&
        parseInt(pdata[i].rent) <= parseInt(range[1])
      ) {
        temp.push(pdata[i]);
      }
    }
  }
  // Smoking
  if (filter.smoking !== "") {
    if (filter.smoking === "smoking") {
      for (let i = 0; i < pdata.length; i++) {
        if (pdata[i].tags[0] === "smoking") {
          temp.push(pdata[i]);
        }
      }
    } else {
      for (let i = 0; i < pdata.length; i++) {
        if (pdata[i].tags[0] === "non-smoking") {
          temp.push(pdata[i]);
        }
      }
    }
  }

  // Gender
  if (filter.gender !== "") {
    console.log(filter.gender);
    if (filter.gender === "male") {
      for (let i = 0; i < pdata.length; i++) {
        if (pdata[i].gender === "male") {
          temp.push(pdata[i]);
        }
      }
    } else if (filter.gender === "female") {
      for (let i = 0; i < pdata.length; i++) {
        if (pdata[i].gender === "female") {
          temp.push(pdata[i]);
        }
      }
    } else {
      for (let i = 0; i < pdata.length; i++) {
        if (pdata[i].gender === "LGBTQ+") {
          temp.push(pdata[i]);
        }
      }
    }
  }

  setFeed(temp);
}

export default function Feed(props) {
  const [pdata, setPdata] = useState([]);
  const [feed, setFeed] = useState([]);
  const [filter, setFilter] = useState({
    rent: "",
    smoking: "",
    drinking: "",
    accomodation: "",
    gender: "",
  });
  useEffect(() => {
    const list = JSON.parse(localStorage.getItem("searchResults"));
    for (let i = 0; i < list.length; i++) {
      getDoc(doc(collection(getFirestore(), "room"), list[i])).then((doc) => {
        if (doc.exists()) {
          setPdata([
            ...pdata,
            {
              name: doc.data().name,
              location:
                doc.data().address.city + ", " + doc.data().address.state,
              address: doc.data().address,
              size: doc.data().sqft,
              rent: doc.data().rent,
              tags: [
                doc.data().smoking ? "smoking" : "non-smoking",
                doc.data().drinking ? "drinking" : "non-drinking",
              ],
              gender: doc.data().gender,
              bio: doc.data().description,
              accomodation: doc.data().availability,
              stars: "4",
            },
          ]);
        }
      });
    }
  }, []);
  useEffect(() => {
    setFeed(pdata);
  }, [pdata]);
  console.log(pdata, feed);
  return (
    <>
      <div className="feedpage">
        <div className="col1">
          <Sidebar />
        </div>
        <div className="col2">
          <SearchBar />
          {/* <div className='searchbar'>searchbar</div> */}
          <div className="feedcontainer">
            {feed.map((room, i) => {
              return (
                <>
                  <FeedCard data={room} key={i} />
                </>
              );
            })}
          </div>
        </div>
        <div className="col3">
          <div className="titlerow">
            <p className="ftitle">FILTERS</p>
            <div className="apply">APPLY</div>
          </div>
          <div className="filterrow">
            <div className="category">RENTS</div>
            <div className="filteritem">
              <input
                type="radio"
                id="2000-5000"
                value={"2000-5000"}
                name="rent"
                onChange={(e) => {
                  updateData(pdata, setFeed, filter);
                  setFilter({ ...filter, rent: e.target.value });
                }}
              />
              <label htmlFor="2000-5000">2000-5000</label>
            </div>
            <div className="filteritem">
              <input
                type="radio"
                id="5000-10000"
                value={"5000-10000"}
                name="rent"
                onChange={(e) => {
                  updateData(pdata, setFeed, {
                    ...filter,
                    rent: e.target.value,
                  });
                  setFilter({ ...filter, rent: e.target.value });
                }}
              />
              <label htmlFor="5000-10000">5000-10000</label>
            </div>
            <div className="filteritem">
              <input
                type="radio"
                id="10000-15000"
                value={"10000-15000"}
                name="rent"
                onChange={(e) => {
                  updateData(pdata, setFeed, {
                    ...filter,
                    rent: e.target.value,
                  });
                  setFilter({ ...filter, rent: e.target.value });
                }}
              />
              <label htmlFor="10000-15000">10000-15000</label>
            </div>
            <div className="filteritem">
              <input
                type="radio"
                id="15000-20000"
                value={"15000-20000"}
                name="rent"
                onChange={(e) => {
                  updateData(pdata, setFeed, {
                    ...filter,
                    rent: e.target.value,
                  });
                  setFilter({ ...filter, rent: e.target.value });
                }}
              />
              <label htmlFor="15000-20000">15000-20000</label>
            </div>
            <div className="filteritem">
              <input
                type="radio"
                id="20000-25000"
                value={"20000-25000"}
                name="rent"
                onChange={(e) => {
                  updateData(pdata, setFeed, {
                    ...filter,
                    rent: e.target.value,
                  });
                  setFilter({ ...filter, rent: e.target.value });
                }}
              />
              <label htmlFor="20000-25000">20000-25000</label>
            </div>
          </div>
          <div className="filterrow">
            <div className="category">HABITS</div>
            <div className="filteritem">
              <input
                type="radio"
                id="smoking"
                name="smoking"
                value={"smoking"}
                onChange={(e) => {
                  updateData(pdata, setFeed, {
                    ...filter,
                    smoking: e.target.value,
                  });
                  setFilter({ ...filter, smoking: e.target.value });
                }}
              />
              <label htmlFor="smoking">SMOKING</label>
            </div>
            <div className="filteritem">
              <input
                type="radio"
                id="non-smoking"
                name="smoking"
                value={"no-smoking"}
                onChange={(e) => {
                  updateData(pdata, setFeed, {
                    ...filter,
                    smoking: e.target.value,
                  });
                  setFilter({ ...filter, smoking: e.target.value });
                }}
              />
              <label htmlFor="non-smoking">NO SMOKING</label>
            </div>
          </div>
          <div className="filterrow">
            <div className="category">ACCOMODATION</div>
            <label
              for="default-range"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Default range
            </label>
            <input
              id="default-range"
              type="range"
              // value="6"
              min={2}
              max={6}
              onChange={(e) => {
                updateData(pdata, setFeed, {
                  ...filter,
                  accomodation: e.target.value,
                });
                setFilter({ ...filter, accomodation: e.target.value });
              }}
              class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
          </div>
          <div className="filterrow">
            <div className="category">GENDER SPECIFIC</div>
            <div className="filteritem">
              <input
                type="radio"
                id="male"
                name="gender"
                value={"male"}
                onChange={(e) => {
                  updateData(pdata, setFeed, {
                    ...filter,
                    gender: e.target.value,
                  });
                  setFilter({ ...filter, gender: e.target.value });
                }}
              />
              <label htmlFor="male">MALE ONLY</label>
            </div>
            <div className="filteritem">
              <input
                type="radio"
                id="female"
                name="gender"
                value={"female"}
                onChange={(e) => {
                  updateData(pdata, setFeed, {
                    ...filter,
                    gender: e.target.value,
                  });
                  setFilter({ ...filter, gender: e.target.value });
                }}
              />
              <label htmlFor="female">FEMALE ONLY</label>
            </div>
            <div className="filteritem">
              <input
                type="radio"
                id="mix"
                name="gender"
                value={"LGBTQ+"}
                onChange={(e) => {
                  updateData(pdata, setFeed, {
                    ...filter,
                    gender: e.target.value,
                  });
                  setFilter({ ...filter, gender: e.target.value });
                }}
              />
              <label htmlFor="MIX">MIX</label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
