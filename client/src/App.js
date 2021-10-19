import React, { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState();
  const handleChangeValues = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="app-container">
      <div className="register-container">
        <h1 className="register-title">SHOP</h1>
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
        <button className="register--button">Cadastrar</button>
      </div>
    </div>
  );
}

export default App;
