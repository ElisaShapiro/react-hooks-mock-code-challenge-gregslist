import React from "react";

function Search({ search, searchedListings, setSearch }) {
  function handleSubmit(e) {
    e.preventDefault();
    setSearch(e.target.value)
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
    </form>
  );
}

export default Search;
