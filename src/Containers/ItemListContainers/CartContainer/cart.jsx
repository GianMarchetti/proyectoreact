import React, { useState,useContext,useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { useParams } from "react-router-dom";
import { getFirestore } from '../../../firebase';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {h3S} from '../../../Components/Item/Item.module.css'
import { CartContext } from '../../../Context/CartContext';

export const Cart = ({products,contador}) => {
    
    const [irCart, setIrCart] = useState(false);
    const { addCart,RemoveElementCart} = useContext(CartContext)

    return(
        <div> 
            <Container fluid style={{marginTop:8, borderColor:'black',textAlign:'center',padding:4,color:'#4a0080' }}>
                <Row>
                    <Col></Col>
                    <Col></Col>
                    <Col addCart={addCart} setIrCart={setIrCart}>
                        <Card style={{margin:8, borderColor:'#4a0080',backgroundColor:'black',textAlign:'center',padding:4,color:'#4a0080' }}>
                            <Card.Img variant="top" src={products.img}/>
                        <Card.Body>
                            <Card.Title className={h3S}>{products.name}</Card.Title>
                        <Card.Text>
                            <p>Precio:${products.price}</p>
                            <p>Cantidad Seleccionada:{contador}</p>
                        </Card.Text>
                        </Card.Body>
                            <Button RemoveElementCart={RemoveElementCart}>Sacar del Carrito</Button>
                        </Card>
                    </Col>
                    <Col></Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
)}