import {Link} from "react-router-dom";
import {Count} from '../../Things.module.css'
import {CartIcon} from './CartWidget.module.css'

const CartWidget = ({contador}) => {
    
    return (
        <div className={CartIcon}>
            <Link to={`/cart`}>
                <i className="fas fa-cart-plus fa-2x" style={{color:'#4a0080'}}></i>
                <span className={Count}>{contador}</span>
            </Link>
            
        </div>
    );
}

export default CartWidget