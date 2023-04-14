import React from "react";

const SearchBox = ({ searchField, searchChange }) => {
  return (
    <div className="pa2">
      <input
        type="search"
        placeholder="Search"
        name="search"
        className="pa3 ba b--green bg-lightest-blue"
        onChange={searchChange}
      />
      <button className="pa3 ba  bg-lightest-grey">Search</button>
    </div>
  );
};

export default SearchBox;
