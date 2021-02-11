import ItemDetail from ".";


const ItemMapDetail = ({products}) => {
    return(
        <div>
            {products.map((product) => {
                return <ItemDetail key={product.id} product={product} />
            })}
        </div>
    )
};

export default ItemMapDetail;