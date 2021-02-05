// import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootsrap.min.css'
import NavbarComponent from './Components/Navbar/index'
import ItemListContainer from './Containers/ItemListContainers/ItemListContainer';

let stylesP = { color: 'purple', fontWeight: 'bolder',textAlign: 'center',}
const App = () => {
    return(
        <>
        <NavbarComponent />
            <p style={stylesP}>Camisetas</p>
            <p style={stylesP}>Shorts</p>
            <p style={stylesP}>Zapatillas</p>
        <ItemListContainer greeting={'Bienvenido. Estos son nuestros productos'} />
        </>
    );
}

export default App;
