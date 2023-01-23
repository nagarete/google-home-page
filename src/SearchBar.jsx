import { useState } from "react";
import "./SearchBar.css";
const SearchBar = () => {
  const [search, setSearch] = useState();
  // const changeSpaceToPlus = (word) => word.split(" ").join("+");
  return (
    <>
      <div className="searchBarContainer">
        <input
          className="searchBar"
          type="text"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="searchButtonContainer">
        <a href={`https://google.com/search?q=${search}`}>
          <button
            onClick={() => {
              console.log(changeSpaceToPlus(search));
            }}
          >
            Google Search
          </button>
        </a>
        <a href="https://www.google.com/doodles">
          <button>I'm feeling lucky</button>
        </a>
      </div>
    </>
  );
};

export default SearchBar;
