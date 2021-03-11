import { createContext, useState  } from "react";
import { act } from "react-dom/test-utils";
// import { CartContainer } from "../Containers/ItemListContainers/CartContainer";


export const CartContext = createContext();

export const CartProvider = ({children, contador, products}) => {
    
    const [cart, setCart] = useState([])
    // console.log(cart)
    let articulosCarrito = [];

    const isInCart = (id) =>{
        return cart.findIndex(products => products.item.id === id)
    }

    const addCart = (product) => {
    console.log(product);
        
        let estaCarrito = isInCart(product.item.id)
        console.log(estaCarrito);
        
        if (estaCarrito === -1){
            setCart([...cart, product])
        }else{
            let NuevoItem= {...cart[estaCarrito], quantity:  cart[estaCarrito].quantity + product.quantity}
            let listaNueva = cart.filter(products => product.item.id !== products.item.id)
            setCart([...listaNueva, NuevoItem])
        }
        showQuantity();
    }
    const removeElementCart = (product) =>{
        
        let estaCarrito = isInCart(product.item.id)

        if (estaCarrito === -1) {
            const productsId = product.target.getAttribute('data-id');
            articulosCarrito = articulosCarrito.filter(products => products.id !== productsId)
        }
    }

    const clearCart = () =>{
        setCart([])
    }

    const showQuantity = () =>{
        console.log(cart)
        return cart.reduce((ant,act) => ant + act.quantity, 0)
    }

    function CartPrice() {
        var totalCosto = 0;
        const totalesProducto = cart.map((art) => art.item.price * art.cantidad ) 
        
        totalesProducto.map((precioItem) => (totalCosto = totalCosto + precioItem));
        return totalCosto;
    }
    
    return <CartContext.Provider value={{cart, setCart, addCart, removeElementCart, clearCart, showQuantity, CartPrice}} >
        {children}
    </CartContext.Provider>
};


