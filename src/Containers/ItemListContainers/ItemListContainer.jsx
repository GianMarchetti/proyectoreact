import React, { useState, useEffect } from 'react';
// import { useParams } from "react-router-dom";
import ItemList from '../../Components/ItemList/ItemList';
import { getFirestore } from '../../firebase';
// import { CartContext } from '../../Context/CartContext';
// import productsPromise from '../../Mocks/productList'
import { Firebase } from '../../firebase/Firebase';
import Loading from './Loading';

const ItemListContainer = ({greeting}) => {

    const [prod, setProd] = useState([]);
    // const [productos, setProductos] = useState([]);
    // const {categoryId} = useParams();

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
                return { ...product.data(), categoria:auxCategorias.data().nombre, id: product.id}
            }))
            // console.log(aux)
            setProd(aux);
        })
    }, [])


    return (
        <div>
            <p style={{color:'black', textAlign:'center', fontSize:24}}> {greeting} </p>
            {prod.length < 1 ? <h1>Cargando productos... <Loading /></h1> : <ItemList products={prod} />}
        </div>
    );
}
export default ItemListContainer

// con estas dos lineas agregabamos nuestro array de productos sin necesidad de ir escribiendo a mano uno x uno v.v
// const baseDeDatos = getFirestore(); 
// listaDeItems.map((u, i) => { baseDeDatos.collection("items").add(u)})