import React, {useEffect, useState} from 'react'

const EjemploUseEffect = () => {
    const[on,setOn]= useState(true)
    const[count,setCount] = useState(1)
    useEffect(()=>{
        console.log('El usseEfect que se ejecuta siempre')
    })
    useEffect(()=>{
        console.log('Se ejecuta una vez')
    },[])
    useEffect(()=>{
        console.log('A la escucha de la variable')
    },[on])
    const stateHandler = () =>{
        setOn(!on)
    }
    return(
    <div>
        <button className='btn btn-danger'onClick={stateHandler}>Click!</button>
        <button className='btn btn-danger' onClick={()=>setCount(count+1)}>+1</button>
    </div>
  )
}

export default EjemploUseEffect