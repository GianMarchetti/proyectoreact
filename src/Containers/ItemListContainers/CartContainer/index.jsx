import { useState,useEffect,useContext } from "react";
import {Link} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
import { Cart } from "./cart";
import { getFirestore } from '../../../firebase';
import Loading from '../Loading';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import { CartContext } from '../../../Context/CartContext';

// let Slink = {color:'gold', backgroundColor:'#4a0080', borderRadius:4, borderColor:'black', padding:4}
export const CartContainer = () => {
    
    const [products, setProducts] = useState([]);
    const { id } = useParams();
    const {clearCart,isInCart} = useContext(CartContext)

    const Total = () => {
        if (isInCart) {
            return products.map((products) => Number(products.price)).reduce((a, b) => a + b, 0);
        }
       }

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
            console.log(aux)
            setProducts(aux);
        })
    }, [])

    return(
        <div style={{marginTop:24}}>
            <div>
                {products.length < 1 ? <div><h2>Todavía no hay productos en el carrito<Button><Link style={{color:'black'}} to={`/`} >Volver al home</Link></Button><Loading/></h2></div> 
                : <Cart products={products}/>}
            </div>
            <div>
                <Container>
                <Row>
                    <Col></Col>
                    <Col>
                        <Card style={{margin:8, borderColor:'#4a0080',backgroundColor:'black',textAlign:'center',padding:4,color:'#4a0080' }}>
                            <p>Total:${Total}</p>
                            <Button style={{margin:4}} clearCart={clearCart}>Vaciar Carrito</Button>
                            <Button style={{margin:4}} Total={Total}>Finalizar Compra</Button>
                        </Card>
                    </Col>
                    <Col></Col>
                </Row>
                </Container>
            </div>
        </div>
    );
};