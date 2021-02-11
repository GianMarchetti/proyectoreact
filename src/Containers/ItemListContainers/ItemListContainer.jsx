import React, { useState } from 'react';
import ItemCount from "../../Components/ItemCount";
import ItemDetail from '../../Components/ItemDetail';
import ItemDetailContainer from '../../Components/ItemDetailContainer';
import ItemList from '../../Components/ItemList/ItemList';
import productList from '../../Mocks/productList';

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

    let btnc = document.getElementsByClassName('btnc')
    const onBuy = () => {
        if (contador) {
            btnc.addEventListener('click', ItemDetailContainer)
            console.log('Se ha hecho una compra de', {contador} )
        }
    }

    const [products, setProducts] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);

    React.useEffect(() => {
        setIsLoading(true);
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(productList), 2000);
        });

        myPromise.then((result) => {
            setProducts(result);
            setIsLoading(false);
        });
    },[]);

    if (isLoading) {
        return <h1>Cargando productos...</h1>
    }

    return (
        <>
            <p> {greeting} </p>
            <ItemList products={products} />
            <ItemDetailContainer />
            <ItemCount stock={24} contador={contador} onAdd={onAdd} onSubstract={onSubstract} onBuy={onBuy} />
        </>
    );
}
export default ItemListContainer