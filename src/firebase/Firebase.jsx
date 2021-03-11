import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import { CartContext } from "../Context/CartContext";
import { getFirestore } from ".";
import "./firebase.css";

export const Firebase = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const { carrito, CartPrice, clear } = useContext(CartContext);
  
    function Order(e) {
      e.preventDefault();
      const db = getFirestore();
      const orders = db.collection("orders");
      const totalPrice = CartPrice();
      const order = {
        buyer: { name: name, email: email, phone: phone },
        items: carrito,
        date: firebase.firestore.Timestamp.fromDate(new Date()),
        total: totalPrice,
      };
      console.log(order);
      orders
        .add(order)
        .then(({ id }) => alert("Este es tu id:" + id))
        .then(() => {
          clear();
          setName("");
          setEmail("");
          setPhone("");
        })
        .catch((error) => console.log(error));
    }
    return (
      <div>
        <form className="form-firebase">
          <h2>Datos de compra</h2>
          <ul className="flex-outer">
            <li>
              <label htmlFor="first-name">Nombre: </label>
              <input
                type="text"
                id="first-name"
                placeholder="Ingresá tu nombre"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                id="email"
                placeholder="Ingresá tu Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </li>
            <li>
              <label htmlFor="phone">Telefono: </label>
              <input
                type="tel"
                id="phone"
                placeholder="Ingresá tu telefono"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </li>
  
            <Link to="/">
              <button className="firebase-button" type="submit" onClick={Order}>
                Comprar
              </button>
            </Link>
          </ul>
        </form>
      </div>
    );
};