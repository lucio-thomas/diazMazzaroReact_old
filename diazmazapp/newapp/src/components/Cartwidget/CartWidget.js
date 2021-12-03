import React from "react"
import 'materialize-css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shopping_cart from './Shopping_cart_font_awesome.png';
//import Shopping_cart from '.src/components/Cartwidget/Shopping_cart_font_awesome.svg';


function CartWidget(){
    return(
        <div>
            <img src={Shopping_cart} className="" alt="Shopping_cart_font_awesome" style={{height:'60px', width:'60px', marginTop:'-8px'}}/>
        </div>
    )
}

export default CartWidget