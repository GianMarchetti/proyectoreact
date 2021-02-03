import React, { useEffect, useState } from 'react';
import ItemCount from "../../Components/ItemCount";
import {card} from "./ItemListContainer.module.css";

const ItemListContainer = ({greeting}) => {

    const [contador, setContador]= useState(1)

    const onAdd = (stock) => {
        if (contador < stock) {
            setContador(contador + 1)
        }else{
            console.log('out of stock')
        }
    }

    const onSubstract = (stock) => {
        if (contador > 1) {
            setContador(contador - 1)
        }else{
            console.log('el valor no puede seguir bajando')
        }
    }
    
    return (
        <>
            <p> {greeting} </p>
            <ItemCount stock={24} contador={contador} onAdd={onAdd} onSubstract={onSubstract} />
        </>
    );
}
export default ItemListContainer