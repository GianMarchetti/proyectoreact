// dfsafd

const ItemCount = ({stock, onAdd, contador, onSubstract }) => {
    return (
        <>
            <button onClick={onSubstract}>-</button>
            <b>{contador}</b>
            {(contador < stock) ?
                <button onClick={() => { onAdd(stock) }}>+</button>
                : null
            }
            <div>
                <button>Comprar</button>
            </div>
        </>
    );
};

export default ItemCount;