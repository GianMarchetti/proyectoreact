import ItemDetailContainer from "../ItemDetailContainer";
import {card} from "./Item.module.css"

const Item = ({product}) => {
    return (
        <div className={card} >
            <img src={product.image} alt="Product" width='200px' height='250px' />
            <h3> {product.name} </h3>
            <p>Precio: {product.price}</p>
        </div>
    );
};

export default Item;