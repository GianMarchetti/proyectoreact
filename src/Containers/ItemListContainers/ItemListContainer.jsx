import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import ItemList from '../../Components/ItemList/ItemList';
import { getFirestore } from '../../firebase';
// import { CartContext } from '../../Context/CartContext';
import productsPromise from '../../Mocks/productList';
import Loading from './Loading';

const ItemListContainer = ({greeting}) => {

    const [prod, setProd] = useState([]);
    const [productos, setProductos] = useState([]);
    const {categoryId} = useParams();

    // useEffect(() => {
    //     if (categoryId === undefined ) {
    //         return productsPromise.then((res) => setProd(res))
    //     }else{
    //         return productsPromise.then((resp)=> { setProd(resp.filter(resp => resp.categoryId === categoryId))})
    //     }
    // },[categoryId])

    useEffect(() => {
        // conexion a la bd
        const baseDeDatos = getFirestore();
        // Guardamos la referencia de la coleccion que queremos tomar
        const itemCollection = baseDeDatos.collection('Items');
        // const item = itemCollection.doc('BDNf9zkMz2R0ufwDjNwa');
        // Tomando los datos
        itemCollection.get().then((value) => {
            let aux = value.docs.map( async (product) => {
                const CategoriasCollection = baseDeDatos.collection('categorias');// llamar otra vez a la bd tomando la categoriaID del element
                let auxCategorias = await CategoriasCollection.doc(product.data().categoryID).get()
                return { ...product.data(), categoria: auxCategorias.data() };
            })
            setProductos(aux);
        });
    }, [])

    return (
        <>
            <p> {greeting} </p>
            {prod.length < 1 ? <h1>Cargando productos... <Loading /></h1> : <ItemList products={prod} />}
        </>
    );
}
export default ItemListContainer

// con estas dos lineas agregabamos nuestro array de productos sin necesidad de ir escribiendo a mano uno x uno v.v
// const baseDeDatos = getFirestore(); 
// listaDeItems.map((u, i) => { baseDeDatos.collection("items").add(u)})