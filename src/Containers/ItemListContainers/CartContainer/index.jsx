import { useState } from "react";
import Loading from "../Loading";
import {Link} from "react-router-dom"

let Slink = {color:'gold', backgroundColor:'#4a0080', borderRadius:4, borderColor:'black', padding:4}
export const CartContainer = (condition) => {
    const [localStorage, setLocalStorage] = useState([])  
    return(
        <div>
            {condition === true 
            ? <h1>Cargando carrito... <Loading /></h1>
            : <h3>No hay Items agregados <Link to={`/`}><button style={Slink}>Volver a seguir comprando</button></Link> </h3> }
        </div>
    );
};