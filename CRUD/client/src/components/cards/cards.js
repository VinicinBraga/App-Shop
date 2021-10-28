import React from "react";
import "./card.css";
import FormDialog from "../dialog/dialogForm";

export default function Card(props) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        title={props.name}
        category={props.category}
        cost={props.cost}
        listGames={props.listGames}
        setListGames={props.setListGames}
        id={props.id}
      />
      <div className="card-container" onClick={() => setOpen(true)}>
        <p className="card-title">Game Card</p>
        <h2 className="game-title">{props.name}</h2>
        <p className="card-category">
          <b>Category: </b> {props.category}
        </p>
        <p className="card-price">
          <b>Price: </b>
          {props.price} $
        </p>
        <p className="card-id">{props.id}</p>
      </div>
    </>
  );
}
