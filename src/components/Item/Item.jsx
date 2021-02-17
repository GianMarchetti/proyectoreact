import {card, h3S} from "./Item.module.css"
import {Link} from "react-router-dom";
import ItemCount from "../ItemCount/index";
import {useState} from 'react';
import { btnIC } from "../ItemCount/ItemCount.module.css";

export const Item = ({product}) => {
    const [irCart, setIrCart] = useState(false);

    const onAdd = (contador) => {
        console.log("Se ha seleccionó", contador, "productos");
        setIrCart(true);
    };
    return (
        <div className={card}>
            <h3 className={h3S}>{product.name}</h3>
            <img src={product.img} alt="Product" width='200px' height='250px' />
            <p>Precio: {product.price}</p>
            <Link to={`/product/${product.id}`}>Ver más</Link>
            {irCart ? <Link className={btnIC} to={`/cart`}>Ir a Cart</Link> : <ItemCount onAdd={onAdd} />}
        </div>
    );
};

