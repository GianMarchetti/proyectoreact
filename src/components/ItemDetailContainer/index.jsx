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

        // Tomando los datos
        itemCollection.get().then(async (value) => {
            //  Usando Promise.all() para esperar que todos los metodos asincronicos se terminen de ejecutar.
            let aux = await Promise.all(value.docs.map( async (product) => {

                // Llamar otra vez a la bd tomando la categoriaID del element
                const CategoriasCollection = baseDeDatos.collection('categorias');

                // Tomamos el documento la id de la categoria
                let auxCategorias = await CategoriasCollection.doc(product.data().categoryID).get()
                return { ...product.data(), categoria:auxCategorias.data().nombre }
            }))
            console.log(aux)
            setProductos(aux);
        })
    }, [])


    return (
        <>
            <ItemDetail products={products} />
        </>
    );
}


export default ItemDetailContainer;