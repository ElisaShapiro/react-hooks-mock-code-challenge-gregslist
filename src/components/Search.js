import React from "react";

function Search({ search, searchedListings, setSearch, setSortPattern }) {
  function handleSubmit(e) {
    e.preventDefault();
    setSearch(e.target.value)
  }
  function handleSortClick(){
    setSortPattern(searchedListings)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={handleSubmit}
      />
      <button type="submit">🔍</button>
      <button onClick={handleSortClick}>Sort By Location</button>
    </form>
  );
}

export default Search;
