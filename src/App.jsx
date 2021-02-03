// import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootsrap.min.css'
import NavbarComponent from './Components/Navbar/index'
import ItemListContainer from './Containers/ItemListContainer';
import ItemCount from './Components/ItemCount';

let stylesP = { color: 'purple', fontWeight: 'bolder',}
const App = () => {
    return(
        <>
        <NavbarComponent />
            <p style={stylesP}>Camisetas</p>
            <p style={stylesP}>Shorts</p>
            <p style={stylesP}>Zapatillas</p>
        <ItemListContainer />
        </>
    );
}

export default App;
