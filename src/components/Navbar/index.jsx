//import 'bootstrap/dist/css/bootsrap.min.css';
//import React from 'react';
import CartWidget from "../CartWidget";
import {nav} from "./navbar.module.css";

let imnav = { height:200, width:200, }
const NavbarComponent = () => {
    return ( 
        <nav className={nav}>
            <img src="/images/logodbz.jpg" alt="icon e-commerce" style={imnav} />
            <h1 > Indumentaria TenkaiKicks </h1> 
            <CartWidget />
        </nav>
    );
}

export default NavbarComponent
