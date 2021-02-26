import {useState} from 'react';
import ItemCount from "../ItemCount/index";
import { card, h3S, H4S } from "../Item/Item.module.css";
import {Link} from "react-router-dom";


const ItemDetail = ({products}) => {

    const [irCart, setIrCart] = useState(false);

    const onAdd = (contador) => {
        console.log("Se ha seleccionó", contador, "productos");
        setIrCart(true);
    };
    
    return (
        <div className={card} >
            <h3 className={h3S} > {products.name} </h3>
            <img src={products.img} alt="Product" width='200px' height='250px' />
            <p className={H4S}> {products.description} </p>
            <p> <h4 className={H4S}> Precio: </h4> {products.price} </p>
            <p> <h4 className={H4S}> Stock: </h4> {products.stock} </p>
            <p> <h4 className={H4S}> Marca: </h4> {products.marca} </p>
            {irCart ? <Link to={`/cart`}>Ir a Cart</Link> : <ItemCount onAdd={onAdd} />}
        </div>
    )
}

export default ItemDetail;