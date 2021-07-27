import React from "react";
import Search from "./Search";

function Header({ search, searchedListings, setSearch }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search 
        search={search} 
        searchedListings={searchedListings} 
        setSearch={setSearch}
      />
    </header>
  );
}

export default Header;
