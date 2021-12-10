import React from "react";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'
import ItemCount from "../ItemCount/ItemCount";
import { getItem } from "../Item/Item";
import ItemList from "../ItemList/ItemList";



//const task = new Promise((resolve, reject) => {
//    //pueden ser o no asincronicas
//    resolve('We found you')
//
//    //reject('404 not found')
//}) //instanciar objeto



 //instanciar objeto



function ItemListContainer(props) {
    console.log(props)

    
    
    return(
        <div style={{background:'#282c34', color:'#61DAFB'}}>
           <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
              integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
              crossorigin="anonymous"
            />
            <script
                src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
                crossorigin></script>
           
            <Button variant="primary" size="lg" onClick={()=> props.aviso()}><h3>Welcome</h3><p>Press to show Item List</p></Button>
            <br></br>
            <br></br>
            <ItemList/>
            {/*<ItemCount/>*/}
            <br></br>
            <br></br>
        </div>
    )



}

export default ItemListContainer