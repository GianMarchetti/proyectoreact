import React, { useState, useEffect } from 'react';
import ItemList from '../../Components/ItemList/ItemList';
import productsPromise from '../../Mocks/productList';

const ItemListContainer = ({greeting}) => {

    const [prod, setProd] = useState([]);

    useEffect(() => {
        productsPromise.then((res) => setProd(res));
    }, []);

    return (
        <>
            <p> {greeting} </p>
            {prod.length < 1 ? <h1>Cargando productos...</h1> : <ItemList products={prod} />}
        </>
    );
}
export default ItemListContainer