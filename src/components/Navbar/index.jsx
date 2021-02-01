//import 'bootstrap/dist/css/bootsrap.min.css';
//import React from 'react';
import CartWidget from "../CartWidget";
import ItemListContainer from "../ItemListContainer";

const NavbarComponent = () => {
    return ( 
        <nav >
            <CartWidget />
            <img src = "/images/arrow2189.png" />
            <h1 > Indumentaria MM </h1> 
            <a href = "#" > Inicio </a> 
            <a href = "#" > Productos </a> 
            <a href = "#" > Carrito </a> 
            <a href = "#" > Contacto </a> 
        </nav>,
        <ItemListContainer />
    );
}

export default NavbarComponent
