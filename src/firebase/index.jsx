import firebase from 'firebase/app';
import "@firebase/firestore";
const app = firebase.initializeApp({
    apiKey: "AIzaSyBjRcR6kuPbCBCh6Pl9rj0153bYNyKOD-M",
    authDomain: "coderhousehola.firebaseapp.com",
    projectId: "coderhousehola",
    storageBucket: "coderhousehola.appspot.com",
    messagingSenderId: "1071185290203",
    appId: "1:1071185290203:web:30fd8adbfc8c9b99afbdfe"
});
export const getFirebase = () => {
    return app;
}
export const getFirestore = () => {
    return firebase.firestore(app);
}



// import React, { useContext, useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../App.css';
// import { ItemCount } from '../components/ItemCount';
// import { GlobalContext } from '../context/GlobalContext';
// import { getFirestore } from '../firebase';
// const ItemListContainer = (props) => {
//     const [contador, setContador] = useState(12)
//     const [stock, setStock] = useState(12)
//     const [productos, setProductos] = useState([])
//     const array = ["Toto", "Sos", "crack"];
//     const { cart, setCart } = useContext(GlobalContext);
//     useEffect(() => {
//         // conexion a la bd
//         const baseDeDatos = getFirestore();
//         // Guardamos la referencia de la coleccion que queremos tomar
//         const itemCollection = baseDeDatos.collection('Items');
//         // Tomando los datos
//         itemCollection.get().then((value) => {
//             let aux = value.docs.map( async (product) => {
//                 // llamar otra vez a la bd tomando la categoriaID del element
//                 const CategoriasCollection = baseDeDatos.collection('Categorias');
//                 let auxCategorias = await CategoriasCollection.doc(product.data().categoryID).get()
//                 return { ...product.data(), categoria: auxCategorias.data() };
//             })
//             setProductos(aux);
//         })
//     }, [])
//     const mostrarAlert = (name) => {
//         // console.log("Hola")
//     }
//     mostrarAlert()
//     const onAdd = (stock) => {
//         setContador(contador + 1);
//     }
//     const onSubstract = () => {
//         if (contador > 1) {
//             setContador(contador - 1);
//         } else {
//             console.log("El valor es menor a lo que podemos vender");
//         }
//     }
//     return (
//         <>
//             {array.map((element, index) => {
//                 return (<div>
//                     <h2>{element}</h2>
//                 </div>)
//             })}
//             <ItemCount stock={stock} cambiarStock={setStock} contador={contador}
//                 onSubstract={onSubstract} onAdd={onAdd} />
//             <Link to={`/contacto`}>
//                 <b>Ir a la pagina de contacto</b>
//             </Link>
//             <button onClick={() => {
//                 localStorage.setItem("carrito", JSON.stringify([...cart, [{ items: { id: 2323, name: 'toto' }, quantity: 2 }]]));
//             }}>agregar un producto</button>
//         </>
//     )
// }
// export default ItemListContainer;

// con estas dos lineas agregabamos nuestro array de productos sin necesidad de ir escribiendo a mano uno x uno v.v
// const baseDeDatos = getFirestore(); 
// listaDeItems.map((u, i) => { baseDeDatos.collection("items").add(u)})