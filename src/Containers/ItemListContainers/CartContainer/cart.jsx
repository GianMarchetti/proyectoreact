import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Loading from "../Loading";
// import ItemCount from '../../../Components/ItemCount/index'
// import {btnIC} from '../../../Components/ItemCount/ItemCount.module.css'
import {h3S} from '../../../Components/Item/Item.module.css'

export const Cart = ({products,contador}) => {
    return(
        <div> 
            <Container fluid>
                <Row>
                <Col></Col>
                <Col></Col>
                <Col>
                    <Card style={{margin:8, borderColor:'black',backgroundColor:'black',textAlign:'center',padding:4,color:'#4a0080' }}>
                        <Card.Img variant="top" src={products.img} />
                        <Card.Body>
                        <Card.Title className={h3S}>{products.name}</Card.Title>
                        <Card.Text>
                            <p>Precio: {products.price}</p>
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col></Col>
                <Col></Col>
                </Row>
            </Container>
        </div>
)}