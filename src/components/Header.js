import React from "react";
import Search from "./Search";

function Header({ search, searchedListings, setSearch, setSortPattern }) {
  
  // function handleSortClick(){
  //   setSortPattern(searchedListings)
  // }
  // onClick={handleSortClick}
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
      <button >Sort By Location</button>
    </header>
  );
}

export default Header;
