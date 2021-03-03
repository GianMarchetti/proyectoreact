import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import productsPromise from '../../Mocks/productList';
import ItemDetail from "../ItemDetail/index";
import { getFirestore } from '../../firebase';

const ItemDetailContainer = () => {

    const [products, setProducts] = useState({});
    const [productos, setProductos] = useState({});
    const { id } = useParams();

    // useEffect(() => {
    //     productsPromise.then((resp) => {
    //     setProducts(resp.find((li) => li.id === parseInt(id)));
    //     });
    // },[]);
    
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
            <ItemDetail products={products} />
        </>
    );
}


export default ItemDetailContainer;