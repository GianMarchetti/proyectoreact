import {Link} from "react-router-dom";
import {Count} from '../../Things.module.css'


const CartWidget = (showQuantity,contador) => {
    const SumNum = () => {
        showQuantity();
    }
    return (
        <>
            <Link to={`/cart`}><i className="fas fa-cart-plus fa-2x" style={{color:'#4a0080'}}></i><span className={Count} SumNum={SumNum}>0</span></Link>
        </>
    );
}

export default CartWidget