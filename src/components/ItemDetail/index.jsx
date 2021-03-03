import {useState} from 'react';
import ItemCount from "../ItemCount/index";
import { h3S, H4S } from "../Item/Item.module.css";
import { btnIC } from "../ItemCount/ItemCount.module.css";
import {Link} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ItemDetail = ({products}) => {

    const [irCart, setIrCart] = useState(false);

    const onAdd = (contador) => {
        console.log("Se ha seleccionó", contador, "productos");
        setIrCart(true);
    };
    
    return (
        <Container fluid>
            <Row>
            <Col></Col>
            <Col></Col>
            <Col>
                <Card style={{  margin:8, borderColor:'black',backgroundColor:'black',textAlign:'center',padding:4,color:'#4a0080' }}>
                <Card.Img variant="top" src={products.img} />
                <Card.Body>
                <Card.Title className={h3S}>{products.name}</Card.Title>
                <Card.Text>
                        <p className={H4S}> {products.description} </p>
                        <p> <h4 className={H4S}> Stock: </h4> {products.stock} </p>
                        <p> <h4 className={H4S}> Marca: </h4> {products.marca} </p>
                        <p>Precio: {products.price}</p>
                </Card.Text>
                {irCart ? <Link className={btnIC} to={`/cart`}>Ir a Cart</Link> : <ItemCount onAdd={onAdd} />}
                </Card.Body>
                </Card>
            </Col>
            <Col></Col>
            <Col></Col>
            </Row>
        </Container>
    )
}

export default ItemDetail;