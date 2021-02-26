import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
// import { CartContext } from '../../Context/CartContext';
// import { CartProvider } from '../../Context/CartContext';
import { btn, btn2, btnc } from "./ItemCount.module.css";
import productsPromise from '../../Mocks/productList';

const ItemCount = ({stock, onAdd, products}) => {
    
    const [contador, setContador] = useState(1);
    const [cart, setCart] = useState([{items:{id:3},quantity:{contador}}]);
    const {id} = useParams();

    const onPlus = () => {
        let max = 24;
        if (contador < max) {
          setContador(contador + 1);
        }else{
            console.log('Se llegó al maximo de stock')
        }
      };

    const onSubstract = () => {
        let min = 1;
        if (contador > min) {
        setContador(contador - 1);
        }else{
            console.log('El valor no puede seguir bajando')
        }
    };

    // const handlerOnAdd = () => {
    //     onAdd(contador);
    // };

    useEffect(() => {
        productsPromise.then((resp) => {
            setCart(resp.find((li) => li.id === parseInt(id)));
            });
    }, [id])

    return (
        <>
        <div>
            <div className={btn2} >
                <button onClick={onSubstract} className={btn}>-</button>
                <b>{contador}</b>
                <button onClick={onPlus} className={btn}>+</button>
            </div>
            <div>
                <button onClick={() =>{setCart([...cart, [{items:{products},quantity:{contador}}]])} } className={btnc}>Comprar</button>
            </div>
        </div>
        </>
    );
};

export default ItemCount;