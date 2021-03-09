import { createContext, useState  } from "react";
import { act } from "react-dom/test-utils";
// import { CartContainer } from "../Containers/ItemListContainers/CartContainer";


export const CartContext = createContext();

export const CartProvider = ({children, contador, products}) => {
    
    const [cart, setCart] = useState([])
    // console.log(cart)
    let articulosCarrito = [];

    // const guardarStorage = () =>{
    //     localStorage.setItem("carrito", JSON.stringify(articulosCarrito));
    // }

    const isInCart = (id) =>{
        return cart.findIndex(products => products.item.id === id)
    }

    const addCart = (item) => {
    console.log(item);
        
        let estaCarrito = isInCart(item.item.id)
        console.log(estaCarrito);
        
        if (estaCarrito === -1){
            setCart([...cart, item])
        }else{
            let NuevoItem= {...cart[estaCarrito], quantity:  cart[estaCarrito].quantity + item.quantity}
            let listaNueva = cart.filter(products => item.item.id !== products.item.id)
            setCart([...listaNueva, NuevoItem])
        }
        // guardarStorage();
        // showQuantity();
    }
    const removeElementCart = (item) =>{
        
        let estaCarrito = isInCart(item.item.id)

        if (estaCarrito === -1) {
            const productsId = item.target.getAttribute('data-id');
            articulosCarrito = articulosCarrito.filter(products => products.id !== productsId)
        }
        // guardarStorage();
    }

    const clearCart = () =>{
        removeElementCart();
        // guardarStorage();
    }

    const showQuantity = () =>{
        console.log(cart)
        return cart.reduce((ant,act) => ant.quantity + act.quantity)
    }

    return <CartContext.Provider value={{cart, setCart, addCart, removeElementCart, clearCart, showQuantity}} >
        {children}
    </CartContext.Provider>
};


