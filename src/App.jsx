import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootsrap.min.css'
import NavbarComponent from './components/Navbar/index'

let stylesP = { color: 'purple', fontWeight: 'bolder',}
const App = () => {
    return(
        <>
        <NavbarComponent />
            <p style={stylesP}>Camisetas</p>
            <p style={stylesP}>Shorts</p>
            <p style={stylesP}>Zapatillas</p>
        </>
    );
}

export default App;
