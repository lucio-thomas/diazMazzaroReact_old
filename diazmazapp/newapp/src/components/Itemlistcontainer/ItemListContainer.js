import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'

function ItemListContainer(props) {
    console.log(props)
    

    return(
        <div style={{background:'black', color:'#61DAFB'}}>
           <link
              rel="stylesheet"
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
              integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
              crossorigin="anonymous"
            />
            <script
                src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
                crossorigin></script>
           
            <Button variant="primary" size="lg" onClick={()=> props.aviso()}><h3>Welcome/Bienvenido</h3></Button>
        </div>
    )


}

export default ItemListContainer