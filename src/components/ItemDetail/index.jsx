// import Item from "../Item/Item";


const ItemDetail = ({product}) => {
    return (
        <div>
            <img src={product.image} alt="Product" width='200px' height='250px' />
            <h3> {product.name} </h3>
            <p> {product.description} </p>
            <p>Precio: {product.price}</p>
            <p>Stock: {product.stock}</p>
            <p>Marca: {product.marca}</p>
        </div>
    )
}

export default ItemDetail;