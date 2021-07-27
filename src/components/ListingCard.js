import React, {useState} from "react";

function ListingCard({ listing, handleRemoveListing }) {
  const [isFavorite, setIsFavorite] = useState(false) //here because no persistence needed
  
  function clickFavorite(listing){
    setIsFavorite(!isFavorite)
  }
  
  function onRemoveListing(){
    fetch(`http://localhost:6001/listings/${listing.id}`, {
      method: "DELETE"
    })
    handleRemoveListing(listing.id)
  }   
  
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={listing.image} alt={listing.description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={clickFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={clickFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{listing.description}</strong>
        <span> · {listing.location}</span>
        <button onClick={onRemoveListing} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
