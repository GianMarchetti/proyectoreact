import { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
import productsPromise from '../../../Mocks/productList';
import { Cart } from "./cart";
import Loading from '../Loading';

// let Slink = {color:'gold', backgroundColor:'#4a0080', borderRadius:4, borderColor:'black', padding:4}
export const CartContainer = (condition) => {
    const [localStorage, setLocalStorage] = useState([])
    const [products, setProducts] = useState({});
    const [prod, setProd] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        productsPromise.then((resp) => {
        setProducts(resp.find((li) => li.id === parseInt(id)));
        });
    },[]);

    return(
        <div>
            {condition === true 
            ? <Cart products={products}/>
            : <div><h2>Todavía no hay productos en el carrito</h2><Link to={`/`} >Volver al home</Link></div> }
        </div>
    );
};