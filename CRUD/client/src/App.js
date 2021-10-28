import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import Card from "./components/cards/cards";

function App() {
  const [values, setValues] = useState();
  const [listGames, setListGames] = useState();

  console.log(listGames);

  const handleChangeValues = (e) => {
    setValues((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClickButton = (e) => {
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      price: values.price,
      category: values.category,
    }).then((response) => {
      console.log(response);
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/getCards").then((response) => {
      setListGames(response.data);
    });
  }, []);

  return (
    <div className="app-container">
      <div className="register-container">
        <h1 className="register-title">Game Data</h1>
        <input
          className="register--input"
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChangeValues}
        />
        <input
          className="register--input"
          type="text"
          name="price"
          placeholder="Price"
          onChange={handleChangeValues}
        />
        <input
          className="register--input"
          type="text"
          name="category"
          placeholder="Category"
          onChange={handleChangeValues}
        />
        <button
          className="register--button"
          onClick={() => handleClickButton()}
        >
          Cadastrar
        </button>
      </div>
      {typeof listGames !== "undefined" &&
        listGames.map((value) => {
          return (
            <Card
              key={value.id}
              listCard={listGames}
              setListCard={setListGames}
              id={value.id}
              name={value.name}
              price={value.price}
              category={value.category}
            ></Card>
          );
        })}
    </div>
  );
}

export default App;
