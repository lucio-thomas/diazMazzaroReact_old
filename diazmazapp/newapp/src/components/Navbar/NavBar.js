import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function NavBar(){
    return(
        <div style = {{background: "black", color: "white", fontFamily: "sans-serif", textAlign:"left",}}>
            <h1 style={{marginLeft: "20px"}}>
                ReactShop
            </h1>
            <ul style= {{marginLeft: "20px", fontSize:"24px"}}>
                <li><a className="" href="src/index.js" rel="">Home</a></li>
                <li><a className="" href="#" rel="">Contact</a></li>
                <li><a className="" href="#" rel="">About</a></li>
            </ul>
        </div>
    )
}

export default NavBar