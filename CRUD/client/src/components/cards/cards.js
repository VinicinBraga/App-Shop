import React from "react";
import "./card.css";
import FormDialog from "./dialog/dialogForm";

export default function Card(props) {
  const [open, setOpen] = React.useState(false);
  const handleClickCard = () => {
    setOpen(true);
  };
  return (
    <>
      <FormDialog
        open={open}
        setOpen={setOpen}
        name={props.name}
        price={props.price}
        category={props.category}
        listGames={props.listGames}
        setListGames={props.setListGames}
        id={props.id}
      />
      <div className="card-container" onClick={() => handleClickCard()}>
        <p className="card-title">Game Card</p>
        <h2 className="game-title">{props.name}</h2>
        <p className="card-category">
          <b>Category: </b> {props.category}
        </p>
        <p className="card-price">
          <b>Price: </b>
          {props.price} $
        </p>
      </div>
    </>
  );
}
