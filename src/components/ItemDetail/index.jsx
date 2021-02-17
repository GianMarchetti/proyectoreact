import {useState} from 'react';
import ItemCount from "../ItemCount/index";
import { card, h3S } from "../Item/Item.module.css";
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
            <p> {products.description} </p>
            <p>Precio: {products.price}</p>
            <p>Stock: {products.stock}</p>
            <p>Marca: {products.marca}</p>
            {irCart ? <Link to={`/cart`}>Ir a Cart</Link> : <ItemCount onAdd={onAdd} />}
        </div>
    )
}

export default ItemDetail;