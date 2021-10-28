import React, { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import Card from "./components/cards/cards";

export default function App() {
  const [values, setValues] = useState();
  const [listGames, setListGames] = useState([]);

  console.log(listGames);
  const handleRegisterGame = () => {
    Axios.post("http://localhost:3001/register", {
      id: values.idgames,
      name: values.name,
      price: values.price,
      category: values.category,
    }).then(() => {
      Axios.post("http://localhost:3001/search", {
        id: values.idgames,
        name: values.name,
        price: values.price,
        category: values.category,
      }).then((response) => {
        setListGames([
          ...listGames,
          {
            id: response.idgames,
            name: values.name,
            price: values.price,
            category: values.category,
          },
        ]);
      });
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/getCards").then((response) => {
      setListGames(response.data);
    });
  }, []);

  const handleaddValues = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };

  return (
    <div className="app-container">
      <div className="register-container">
        <h1 className="register-title">Game Data</h1>

        <input
          type="text"
          name="name"
          placeholder="Nome"
          className="register--input"
          onChange={handleaddValues}
        />
        <input
          type="text"
          placeholder="Preço"
          name="price"
          className="register--input"
          onChange={handleaddValues}
        />
        <input
          type="text"
          placeholder="Categoria"
          name="category"
          className="register--input"
          onChange={handleaddValues}
        />

        <button onClick={handleRegisterGame} className="register--button">
          Cadastrar
        </button>
      </div>
      {console.log(listGames)}
      {listGames.map((value) => (
        <Card
          listGames={listGames}
          setListGames={setListGames}
          key={value.idgames}
          id={value.idgames}
          name={value.name}
          price={value.price}
          category={value.category}
        />
      ))}
    </div>
  );
}
