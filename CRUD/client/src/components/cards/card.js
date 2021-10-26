import React from "react";
import "./card.css";

export default function Card(props) {
  return (
    <div className="card-container">
      <p className="card-title1">Game Card</p>
      <h1 className="game-title">{props.name}</h1>
      <p className="card-category">Category: {props.category}</p>
      <p className="card-price">$ {props.price}</p>
    </div>
  );
}
