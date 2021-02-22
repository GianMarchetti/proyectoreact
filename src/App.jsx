// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootsrap.min.css'
import NavbarComponent from './Components/Navbar/index'
import ItemListContainer from './Containers/ItemListContainers/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { GlobalContext } from './Context/GlobalContext';
import {Link} from "react-router-dom";


let stylesP = { color: 'orange', fontWeight: 'bolder',textAlign: 'center', margin: 2,textDecoration:'none'}
let foot = { backgroundColor:'black', color: 'orange', height: 100, marginTop: 8}
const App = () => {
    return(
        <GlobalContext.Provider>
            <Router>
                <NavbarComponent />
                    <Switch>
                        <Route exact path='/' >
                            <Link to={`/category/:categoryId`}> <p style={stylesP}>Zapatillas</p> </Link>
                            <Link to={`/category/:categoryId`}> <p style={stylesP}>Camisetas</p> </Link>
                            <Link to={`/category/:categoryId`}> <p style={stylesP}>Shorts</p> </Link>
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
        </GlobalContext.Provider>
    );
}

export default App;
