import logo from './logo.svg';
import './App.css';
// import 'bootstrap/dist/css/bootsrap.min.css'
import NavbarComponent from './src/Components/navbar/';

let estilos = { color: 'violet', background: 'red', paddingLeft: '20px'}
const App = () => {
  return(
    <>
    <NavbarComponent />
        Hola coder
    </>
  );
}

export default App;
