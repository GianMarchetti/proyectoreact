import { btn } from "./ItemCount.module.css";

const ItemCount = ({stock, onAdd, contador, onSubstract, onBuy }) => {
    return (
        <>
            <button onClick={onSubstract} className={btn}>-</button>
            <b>{contador}</b>
            {(contador < stock) ?
                <button onClick={() => { onAdd(stock) }} className={btn}>+</button>
                : null
            }
            <div>
                <button onClick={onBuy} className={btn}>Comprar</button>
            </div>
        </>
    );
};

export default ItemCount;