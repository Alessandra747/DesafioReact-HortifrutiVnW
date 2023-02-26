import { useState } from "react";
import "./styles.css";

import alface from "./imagens/alface.png";
import laranja from "./imagens/laranja.png";
import cereja from "./imagens/cereja.png";
import cenoura from "./imagens/cenoura.png";
import manga from "./imagens/manga.png";
import limao from "./imagens/limao.png";
import beterraba from "./imagens/beterraba.png";
import tomate from "./imagens/tomate.png";
import shoppingCart from "./imagens/ShoppingCart.png";

export default function App() {
  const [list, setList] = useState([
    alface,
    laranja,
    cereja,
    cenoura,
    manga,
    limao,
    beterraba,
    tomate
  ]);

  const renderList = () => {
    return list.map((product) => <img src={product} />);
  };

  return (
    <div className="container">
      <span className="titleBox">
        <h1>HORTIFRUTI</h1>
        <h2>VnW</h2>
      </span>

      <div className="content">
        <div className="productBox">
          <h3>Nossos Produtos</h3>
          <div className="products">{renderList()}</div>
        </div>
        <div className="cartBox">
          <div className="cart">
            <img src={shoppingCart} alt="cart" />
            <p> Arraste o seu produto aqui para colocar no carrinho</p>
          </div>
          <div className="buttonsCart">
            <button className="adicionar">+</button>
            <button className="subtrair">-</button>
          </div>
        </div>
      </div>
    </div>
  );
}
