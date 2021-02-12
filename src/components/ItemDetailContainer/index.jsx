import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import productsPromise from '../../Mocks/productList';
import ItemDetail from "../ItemDetail/index";

const ItemDetailContainer = () => {

    const [products, setProducts] = useState({});
    const { id } = useParams();

    useEffect(() => {
        productsPromise.then((resp) => {
        setProducts(resp.find((li) => li.id === parseInt(id)));
        });
    },[]);

    return (
        <>
            <ItemDetail products={products} />
        </>
    );
}


export default ItemDetailContainer;