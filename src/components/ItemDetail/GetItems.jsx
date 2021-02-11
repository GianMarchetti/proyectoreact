import productList from "../../Mocks/productList";
import React, { useEffect, useState } from 'react';
import ItemMapDetail from '../ItemDetail/ItemMapDetail';


const getItems = () => {

    useEffect(() => {
        const myPromise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(productList), 2000);
        });
        myPromise.then((result) => {
            setProducts(result);
        });
    },[]);
}

export default getItems;