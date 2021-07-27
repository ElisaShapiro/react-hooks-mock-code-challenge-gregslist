import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, handleRemoveListing }) {
  return (
    <main>
      <ul className="cards">
        {listings.map((listing) => {
          return (<ListingCard 
            key={listing.id} 
            listing={listing} 
            handleRemoveListing={handleRemoveListing} 
          />)
        })}
      </ul>
    </main>
  );
}

export default ListingsContainer;
