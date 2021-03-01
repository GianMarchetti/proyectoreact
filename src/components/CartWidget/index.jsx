import {Link} from "react-router-dom";

const CartWidget = () => {
    return (
        <>
            <Link to={`/cart`}><i className="fas fa-cart-plus fa-2x"></i></Link>
        </>
    );
}

export default CartWidget