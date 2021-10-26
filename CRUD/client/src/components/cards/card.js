import React from "react";
import "./card.css";

export default function Card(props) {
  return (
    <div className="card-container">
      <h1 className="card-title">{props.name}</h1>
      <p className="card-category">Category: {props.category}</p>
      <p className="card-price">$ {props.price}</p>
    </div>
  );
}
