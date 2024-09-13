import React from "react";

function Card({ imgURL, Icons, name }) {
  return (
    <div className="Card--body">
      <img className="Card--image" src={imgURL} alt={name} />
      <div className="Card--flex">
        <Icons />
        <div>{name}</div>
      </div>
    </div>
  );
}

export default Card;