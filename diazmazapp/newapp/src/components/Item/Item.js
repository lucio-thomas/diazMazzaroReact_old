import React from "react";

const productos =[
    {id:1, foto: '#', instrumento:'guitarra', nombre: 'Fender Strat', precio:2000, stock:2},
    {id:2, foto: '#', instrumento:'bajo', nombre: 'Fender Jazz', precio:800, stock:1},
    {id:3, foto: '#', instrumento:'bateria', nombre: 'Roland Drums', precio:700, stock:3}
]


export const getItem = new Promise((resolve) => {
    //pueden ser o no asincronicas
    setTimeout(() =>{
        resolve(productos)
    }, 2000)

})


//https://media.guitarcenter.com/is/image/MMGS7/K48545000001000-02-720x720.jpg
//https://media.guitarcenter.com/is/image/MMGS7/L21571000001000-02-720x720.jpg
//https://media.guitarcenter.com/is/image/MMGS7/L37361000000000-00-720x720.jpg



//'data:image/jpeg;base64,/MMGS7/K48545000001000-02=='
//'data:image/jpeg;base64,/MMGS7/L21571000001000-02=='
//'data:image/jpeg;base64,/MMGS7/L37361000000000-00=='
