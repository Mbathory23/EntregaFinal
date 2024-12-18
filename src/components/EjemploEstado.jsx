import React, {useState} from 'react'

const EjemploEstado = () => {
    const[text, setText]= useState('Hola chicos')
    const cambiarTexto =() =>{
        setText('Chau chicos')
    } 
    console.log('Ejemplo estados')
  return (
    <div>
        <p>{text}</p>
        <buton className='btn btn-primary' onClick={cambiarTexto}>cambiar texto</buton>
    </div>
  )
}

export default EjemploEstado