import {Link} from "react-router-dom";

let stylesP = { color: 'orange', fontWeight: 'bolder',textAlign: 'center', margin: 2,textDecoration:'none'}
const CartWidget = () => {
    return (
        <>
        <Link to={`/`} style={stylesP}>Inicio</Link>
        <Link to={`/`} style={stylesP}>Productos</Link>
        <Link to={`/contact`} style={stylesP}>Contacto</Link>
        <Link to={`/cart`} style={stylesP}><i className="fas fa-cart-plus ">Carrito</i></Link>
        </>
    );
}

export default CartWidget