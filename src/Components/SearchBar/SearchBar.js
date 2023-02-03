import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "@firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({ onSearch }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Filter the dummy data based on the search term
    // const results = dummyData.filter((item) =>
    //   item.name.toLowerCase().includes(searchTerm.toLowerCase())
    // );
    getDocs(
      query(
        collection(getFirestore(), "room"),
        where("address.city", "==", searchTerm)
      )
    ).then((snapshot) => {
      const results = snapshot.docs.map((doc) => {
        return doc.id;
      });
      setSearchResults(results);
      localStorage.setItem("searchResults", JSON.stringify(results));
      navigate("/explore");
    });
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <div class="max-w-xl">
          <div class="flex space-x-4">
            <div class="flex shadow-md rounded-md overflow-hidden w-full">
              <input
                type="text"
                name="location"
                id="location"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="find your way through"
                autocomplete="given-name"
                class="w-full rounded-md rounded-r-none shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              ></input>
              <button class="bg-indigo-600 text-white px-6 text-lg font-semibold py-3 rounded-r-md">
                Search...
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
