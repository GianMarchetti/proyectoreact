import { createContext, useState  } from "react";


export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart]= useState([{id:1, name:'Zapatillas', price:824}])

    return <CartContext value={{cart, setCart}} >
        {children}
    </CartContext>
}