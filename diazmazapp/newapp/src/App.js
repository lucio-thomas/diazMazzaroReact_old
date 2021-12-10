//import {BrowserRouter, Routes, Route} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Navbar from 'react-bootstrap/Navbar';
import NavBar from './components/Navbar/NavBar';
import ItemListContainer from './components/Itemlistcontainer/ItemListContainer';
import ItemList from './components/ItemList/ItemList';

function App() {

  function clickWarn(params){
    console.log('provisional text which is then replaced by the catalog. pressing this button wont show the items')
    return(
      <center>
        <ItemList/>
      </center>
    )
  }
  //function listDisplay(){
  //  return(
  //    <ItemList/>
  //  )
  //}

  return (
      <center>
        <div className="App">
            <NavBar/>
          <header className="App-header">
            <h1 style={{color: "#61DAFB"}} >
              Welcome to ReactShop
            </h1>
            <br></br>
            <br></br>
            <ItemListContainer aviso={clickWarn} />
            


            <img src={logo} className="App-logo" alt="logo" />

          </header>
        </div>
      </center>

    
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
