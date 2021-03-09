// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './Components/Navbar/index'
import ItemListContainer from './Containers/ItemListContainers/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { CartProvider } from './Context/CartContext';
// import { Cart } from './Containers/ItemListContainers/CartContainer/cart';
import { Foot } from './Components/Footer';
import { CartContainer } from './Containers/ItemListContainers/CartContainer';
// import {Link} from "react-router-dom";

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
                            <CartContainer />
                        </Route>
                    </Switch>
                <Foot />
            </Router>
        </CartProvider>
    );
}

export default App;
