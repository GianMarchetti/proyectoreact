// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import 'bootstrap/dist/css/bootsrap.min.css'
import NavbarComponent from './Components/Navbar/index'
import ItemListContainer from './Containers/ItemListContainers/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { GlobalContext } from './Context/GlobalContext';

const App = () => {
    return(
        <GlobalContext.Provider>
            <Router>
                <NavbarComponent />
                    <Switch>
                        <Route exact path='/' >
                            <ItemListContainer greeting={'Bienvenido. Estos son nuestros productos'} />
                        </Route>
                        <Route exact path='/product/:id'>
                            <ItemDetailContainer />
                        </Route>
                        <Route exact path='/category/categoryId'>
                            <ItemDetailContainer />
                        </Route>
                        <Route exact path='/cart'>

                        </Route>
                    </Switch>
                <footer>Derechos reservados...</footer>
            </Router>
        </GlobalContext.Provider>
    );
}

export default App;
