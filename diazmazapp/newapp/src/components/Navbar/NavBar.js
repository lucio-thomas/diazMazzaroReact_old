import React from "react";
import './navBar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'
import CartWidget from "../Cartwidget/CartWidget";

function NavBar(){
    return(
        <div style = {{background: "black", color: "white", fontFamily: "sans-serif", textAlign:"left",}}>
            <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
              integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
              crossOrigin="anonymous"
            />
            <script
                src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
                crossorigin></script>

            <h1 style={{marginLeft: "20px"}}>
                ReactShop
            </h1>
            <ul style= {{marginLeft: "20px", fontSize:"24px", display: "inline-block"}}>
                <li><a className="" href="src/index.js" rel=""><Button variant="info">Home</Button></a></li>
                <li><a className="" href="#" rel=""><Button variant="info">Contact</Button></a></li>
                <li><a className="" href="#" rel=""><Button variant="info">About</Button></a></li>
                <li><a className="" href="#" rel=""><CartWidget/></a></li>
            </ul>
        </div>
    )
}


//<li><a className="" href="src/Itemlistcontainer/ItemListContainer.js" rel=""><Button variant="info">Items</Button></a></li>



export default NavBar