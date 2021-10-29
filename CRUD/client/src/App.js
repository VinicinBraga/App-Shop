import React, { useState, useEffect } from "react";
import "./App.css";
import Axios from "axios";
import Card from "./components/cards/cards";

function App() {
  const [values, setValues] = useState();
  const [listGames, setListGames] = useState();

  const handleRegisterButton = () => {
    console.log(values);
    if (values === undefined) {
      alert("The game store fields must be filled");
    } else {
      Axios.post("http://localhost:3001/register", {
        name: values.name,
        price: values.price,
        category: values.category,
      }).then(() => {
        Axios.post("http://localhost:3001/search", {
          name: values.name,
          price: values.cost,
          category: values.category,
        }).then(() => {
          setListGames([
            ...listGames,
            {
              name: values.name,
              price: values.price,
              category: values.category,
            },
          ]);
        });
      });
    }

    window.location.reload();
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/getCards").then((response) => {
      setListGames(response.data);
    });
  }, []);

  const handleChangeValues = (e) => {
    setValues((prevValue) => ({
      ...prevValue,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="app-container">
      <div className="register-container">
        <h1 className="register-title">GAME STORE</h1>
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
          onClick={() => handleRegisterButton()}
        >
          Cadastrar
        </button>
      </div>
      {typeof listGames !== "undefined" &&
        listGames.map((value) => {
          return (
            <Card
              key={value.id}
              listGames={listGames}
              setListGames={setListGames}
              id={value.idgames}
              name={value.name}
              price={value.price}
              category={value.category}
            />
          );
        })}
    </div>
  );
}

export default App;
