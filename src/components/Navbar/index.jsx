//import 'bootstrap/dist/css/bootsrap.min.css';
//import React from 'react';
import CartWidget from "../CartWidget";
import {nav} from "./navbar.module.css";
import { Link } from "react-router-dom";

let imnav = { height:200, width:200, }
const NavbarComponent = () => {
    return ( 
        <nav className={nav}>
            <Link to={`/`} ><img src="https://i.ibb.co/HKCm9z0/logodbz.jpg" alt="icon e-commerce" style={imnav} border="0"/></Link>
            <h1 > Indumentaria TenkaiKicks </h1> 
            <CartWidget />
        </nav>
    );
}

export default NavbarComponent
