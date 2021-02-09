import { btn, btn2, btng, btnc } from "./ItemCount.module.css";

const ItemCount = ({stock, onAdd, contador, onSubstract, onBuy }) => {
    return (
        <>
        <div className={btng}>
            <div className={btn2} >
                <button onClick={onSubstract} className={btn}>-</button>
                <b>{contador}</b>
                {(contador < stock) ?
                    <button onClick={() => { onAdd(stock) }} className={btn}>+</button>
                    : null
                }
            </div>
            <div>
                <button onClick={onBuy} className={btnc}>Comprar</button>
            </div>
        </div>
        </>
    );
};

export default ItemCount;