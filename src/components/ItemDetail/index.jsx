import {useState} from 'react';
import ItemCount from "../ItemCount/index";
// import {Link} from "react-router-dom";


const ItemDetail = ({product}) => {

    const [irCart, setIrCart] = useState(false);

    const onAdd = (contador) => {
        console.log("Se ha seleccionó", contador, "productos");
        setIrCart(true);
    };
    
    return (
        <>
            <img src={product.img} alt="Product" width='200px' height='250px' />
            <h3> {product.name} </h3>
            <p> {product.description} </p>
            <p>Precio: {product.price}</p>
            <p>Stock: {product.stock}</p>
            <p>Marca: {product.marca}</p>
            {irCart ? <button>Ir a Cart</button> : <ItemCount onAdd={onAdd} />}
        </>
    )
}

export default ItemDetail;