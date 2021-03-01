import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ItemList from '../../Components/ItemList/ItemList';
// import { getFirestore } from '../../firebase';
// import { CartContext } from '../../Context/CartContext';
import productsPromise from '../../Mocks/productList';
import Loading from './Loading';

const ItemListContainer = ({greeting}) => {

    const [prod, setProd] = useState([]);
    const {categoryId} = useParams();

    useEffect(() => {
        if (categoryId === undefined ) {
            return productsPromise.then((res) => setProd(res))
        }else{
            return productsPromise.then((resp)=> { setProd(resp.filter(resp => resp.categoryId === categoryId))})
        }
    },[categoryId])

    // useEffect(() => {
    //     const baseDeDatos = getFirestore(); 
    //     // Guardamos la referencia de la coleccion que queremos tomar
    //     const itemCollection = baseDeDatos.collection('categorias'); 
    //     // Tomando los datos
    //     itemCollection.get().then((value) => {
    //         let aux = value.docs.map(element => {
    //             return {...element.data(), id:element.id}})
    //             console.log(aux);
    //         setProd(aux);
    //     })
    // }, [])

    return (
        <>
            <p> {greeting} </p>
            {prod.length < 1 ? <h1>Cargando productos... <Loading /></h1> : <ItemList products={prod} />}
        </>
    );
}
export default ItemListContainer