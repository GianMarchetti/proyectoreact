import {Link} from "react-router-dom";

const CartWidget = () => {
    return (
        <>
        <Link to={`/`}><i className="fas fa-home ">Inicio</i></Link>
        <Link to={`/`}><i className="fas fa-tshirt ">Productos</i></Link>
        <Link to={`/`}><i className="fas fa-cart-plus ">Carrito</i></Link>
        <Link to={`/`}><i className="fas fa-user-alt ">Contacto</i></Link>
        </>
    );
}

export default CartWidget