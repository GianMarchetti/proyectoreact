import {Link} from "react-router-dom";

let stylesP = { color: 'orange', fontWeight: 'bolder',textAlign: 'center', margin: 2,textDecoration:'none'}
const CartWidget = () => {
    return (
        <>
        <Link to={`/`} style={stylesP}>Inicio</Link>
        <Link to={`/category/:categoryId`} style={stylesP}>Camisetas</Link>
        <Link to={`/category/:categoryId`} style={stylesP}>Shorts</Link>
        <Link to={`/category/:categoryId`} style={stylesP}>Zapatillas</Link>
        <Link to={`/category/:categoryId`} style={stylesP}><i className="fas fa-cart-plus ">Carrito</i></Link>
        </>
    );
}

export default CartWidget