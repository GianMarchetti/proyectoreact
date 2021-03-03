// import 'bootstrap/dist/css/bootsrap.min.css';
//import React from 'react';
import CartWidget from "../CartWidget";
import {nav} from "./navbar.module.css";
import { Link } from "react-router-dom";

let stylesP = { color: '#4a0080', fontWeight: 'bolder',textAlign: 'center', margin: 2,textDecoration:'none'}
let stylesN = { color: 'gold', fontWeight: 'bolder',textAlign: 'center', margin: 2,textDecoration:'none'}
let imnav = { height:200, width:200, }
const NavbarComponent = ({product}) => {
    return ( 
        <nav className={nav}>
            <Link to={`/`} ><img src="https://i.ibb.co/VvcLy5Y/kobelogoblack.jpg" alt="icon e-commerce" style={imnav} border="0"/></Link>
            <h1 > Indumentaria MambaKicks </h1> 
            <Link to={`/`} style={stylesN}>Inicio</Link>
            <Link to={`/`} style={stylesN}>Productos</Link>
            <Link to={`/contact`} style={stylesN}>Contacto</Link>
            <Link to={`/cart`} style={stylesN}>Carrito</Link>
            <CartWidget />
            <Link to={`/category/Zapatillas`}><p style={stylesP}> Zapatillas</p></Link>
            <Link to={`/category/Camisetas`}><p style={stylesP}> Camisetas</p></Link>
            <Link to={`/category/Shorts`}><p style={stylesP}> Shorts</p></Link>
        </nav>
    );
}

export default NavbarComponent
