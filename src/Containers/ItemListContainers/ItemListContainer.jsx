import React, { useState, useEffect } from 'react';
import ItemList from '../../Components/ItemList/ItemList';
import productsPromise from '../../Mocks/productList';
import Loading from './Loading';

const ItemListContainer = ({greeting}) => {

    const [prod, setProd] = useState([]);

    useEffect(() => {
        productsPromise.then((res) => setProd(res));
    }, []);

    return (
        <>
            <p> {greeting} </p>
            {prod.length < 1 ? <h1>Cargando productos...</h1> : <ItemList products={prod} />}
            <Loading />
        </>
    );
}
export default ItemListContainer