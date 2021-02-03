import React, { useEffect, useState } from 'react';
import ItemCount from "../Components/ItemCount"

const ItemListContainer = (props) => {

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
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic ipsum, quia nostrum amet recusandae iusto beatae sapiente consectetur? Libero unde corrupti magnam ducimus quas sint repellat placeat perferendis explicabo animi.</p>
            <ItemCount stock={24} contador={contador} onAdd={onAdd} onSubstract={onSubstract} />
        </>
    );
}
export default ItemListContainer