import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
// import productsPromise from '../../Mocks/productList';
import ItemDetail from "../ItemDetail/index";
import { getFirestore } from '../../firebase';

const ItemDetailContainer = () => {

    const [products, setProducts] = useState({});
    const { id } = useParams();

    
    useEffect(() => {
        // conexion a la bd
        const baseDeDatos = getFirestore();

        // Guardamos la referencia de la coleccion que queremos tomar
        const itemCollection = baseDeDatos.collection('Items');

        // Tomando los datos
        itemCollection.doc(id).get().then(async (value) => {
            // console.log(value.data());
            setProducts({...value.data(), id: id})
        })
    }, [])


    return (
        <>
            <ItemDetail products={products} />
        </>
    );
}


export default ItemDetailContainer;