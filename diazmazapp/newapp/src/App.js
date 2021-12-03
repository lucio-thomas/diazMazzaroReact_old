import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Navbar from 'react-bootstrap/Navbar';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/Itemlistcontainer/ItemListContainer';

function App() {

  function clickWarn(params){
    console.log('texto provisional que luego se reemplaza por el catálogo/provisional text which is then replaced by the catalog')
  }

  return (
    <div className="App">
        <NavBar/>
        <ItemListContainer aviso={clickWarn} />
      <header className="App-header">
        <h1 style={{color: "#61DAFB"}} >
          Welcome to ReactShop
        </h1>
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      
    </div>
    
  );
}

/*<p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
        
        
        
        titulo={titulo} subtitulo={subtitulo}
        
        */





export default App;
