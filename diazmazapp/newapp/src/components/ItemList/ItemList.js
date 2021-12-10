import React from "react";

import { useState, useEffect } from "react";
import { getItem } from "../Item/Item";


function ItemList(){
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getItem
            .then(result => setProductos(result))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
        })

    console.log(productos)


    return(
        <div>
            {loading ? <h2>Cargando...</h2>: productos.map((producto) => <li key ={producto.id}>{producto.nombre}</li>)}
        </div>
    )
} 

export default ItemList