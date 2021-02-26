import { createContext, useState  } from "react";
// import { CartContainer } from "../Containers/ItemListContainers/CartContainer";


export const CartContext = createContext();

export const CartProvider = ({children, contador, products}) => {
    
    const [cart, setCart] = useState([{items:{products},quantity:{contador}}])
    console.log(cart)
    let articulosCarrito = [];
    const guardarStorage = () =>{
        localStorage.setItem(setCart, JSON.stringify(articulosCarrito));
    }

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
        guardarStorage();
    }
    const removeElementCart = (item) =>{
        
        let estaCarrito = isInCart(item.item.id)

        if (estaCarrito === -1) {
            const productsId = item.target.getAttribute('data-id');
            articulosCarrito = articulosCarrito.filter(products => products.id !== productsId)
        }
        guardarStorage();
    }

    const clearCart = () =>{
        removeElementCart();
        articulosCarrito = [];
        guardarStorage();
    }

    return <CartContext.Provider value={{cart, setCart, addCart, removeElementCart, clearCart}} >
        {children}
    </CartContext.Provider>
};


