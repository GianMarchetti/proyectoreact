// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootsrap.min.css'
import NavbarComponent from './Components/Navbar/index'
import ItemListContainer from './Containers/ItemListContainers/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { CartProvider } from './Context/CartContext';
// import {Link} from "react-router-dom";

let foot = { backgroundColor:'black', color: 'orange', height: 100, marginTop: 8}
const App = () => {
    return(
        <CartProvider>
            <Router>
                <NavbarComponent />
                    <Switch>
                        <Route exact path='/' >
                            <ItemListContainer greeting={'Bienvenido. Estos son nuestros productos'} />
                        </Route>
                        <Route exact path='/product/:id'>
                            <ItemDetailContainer />
                        </Route>
                        <Route exact path='/category/:categoryId'>
                            <ItemListContainer />
                        </Route>
                        <Route exact path='/cart'>

                        </Route>
                    </Switch>
                <footer style={foot}>Derechos reservados...</footer>
            </Router>
        </CartProvider>
    );
}

export default App;
