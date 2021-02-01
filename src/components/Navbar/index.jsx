//import 'bootstrap/dist/css/bootsrap.min.css';
//import React from 'react';
import CartWidget from "../CartWidget";
import ItemListContainer from "../ItemListContainer";

const NavbarComponent = () => {
    return ( 
        <nav >
            <img src = "/images/arrow2189.png" />
            <h1 > Indumentaria MM </h1> 
            <a href = "#" > Inicio </a> 
            <a href = "#" > Productos </a> 
            <a href = "#" > Carrito </a> 
            <CartWidget />
            <a href = "#" > Contacto </a> 
            <ItemListContainer />
        </nav>
    );
}

export default NavbarComponent
