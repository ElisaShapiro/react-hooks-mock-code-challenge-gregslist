import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([])
  const [search, setSearch] = useState("")
  const [sortPattern, setSortPattern] = useState(false)
  
  useEffect(() => {
    fetch("http://localhost:6001/listings")
    .then(resp => resp.json())
    .then(data => setListings(data))
  }, []);

  function handleRemoveListing(id){
    let removedListings = listings.filter((listing) => {
      if (listing.id !== id)
        return true
    })
    setListings(removedListings)
  }

  let searchedListings = listings.sort((a, b) => {
    if (sortPattern === true) {
      if (a.location > b.location) {
        return 1
      } else if (a.location < b.location) {
        return -1
      } else if (a.location === b.location) {
        return 0
      }
    }
  }).filter((listing) => {
    if (search.length === 0) {
      return true
    } else if (listing.description.toLowerCase().includes(search.toLowerCase())) {
      return true
    }
  })

  return (
    <div className="app">
      <Header 
        search={search} 
        searchedListings={searchedListings} 
        setSearch={setSearch}
        setSortPattern={setSortPattern}
      />
      <ListingsContainer 
        listings={searchedListings} 
        handleRemoveListing={handleRemoveListing}
      />
    </div>
  );
}

export default App;
