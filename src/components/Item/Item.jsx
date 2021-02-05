import {card} from "./Item.module.css"

const Item = ({product}) => {
    return (
        <div className={card} >
            <h3> {product.name} </h3>
            <p>Precio: {product.price}</p>
            <p>Stock: {product.stock}</p>
            <p>Marca: {product.marca}</p>
        </div>
    );
};

export default Item;