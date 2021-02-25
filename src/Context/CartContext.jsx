import { createContext, useState  } from "react";


export const CartContext = createContext();

export const CartProvider = ({children, contador}) => {
    
    const [cart, setCart]= useState([{items:{id:3},quantity:{contador}}])

    // addItemCart()
    // removeElementCart()
    // clearCart()

    return <CartContext.Provider value={{cart, setCart}} >
        {children}
    </CartContext.Provider>
}