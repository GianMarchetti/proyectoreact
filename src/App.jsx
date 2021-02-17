// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootsrap.min.css'
import NavbarComponent from './Components/Navbar/index'
import ItemListContainer from './Containers/ItemListContainers/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';

// let stylesP = { color: 'orange', fontWeight: 'bolder',textAlign: 'center'}
const App = () => {
    return(
        <>
            <Router>
                <NavbarComponent />;
                    <Switch>
                        <Route exact path='/' >
                        {/* <p style={stylesP}>Camisetas</p>
                        <p style={stylesP}>Shorts</p>
                        <p style={stylesP}>Zapatillas</p> */}
                            <ItemListContainer greeting={'Bienvenido. Estos son nuestros productos'} />
                        </Route>
                        <Route exact path='/product/:id'>
                            <ItemDetailContainer />
                        </Route>
                        <Route exact path='/cart'>

                        </Route>
                    </Switch>
            </Router>
        </>
    );
}

export default App;
