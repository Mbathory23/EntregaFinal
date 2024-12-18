//import React, {useEffect} from 'react'
import {getProducts} from  '../../mock/data'
import React, { useEffect } from 'react'


const EjemploPromise = () => {
    let error = true
    const Simu = new Promise((resolve, reject)=>{
        if(error){
            reject('No hay Hamburguesa')
        }else{
            resolve('Hay hamburguesa')
        }
    }) 
    const fakeApi = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(error){
                reject('Hubo un problema intente mas tarde')
            }else{
                resolve([{name:'ramdon',price:50,stock:10}, {name:'ramdon2',price:80,stock:15}])
            }
        },5000)
    })
    console.log(fakeApi)
    useEffect(()=>{
        fakeApi
        .then((res)=>console.log('Respuesta',res))
        .catch((error)=> console.log(error))
    },[])

    useEffect(()=>{
        getProducts()
        .then((res)=>console.log(res))
        .catch((error)=>console.log(error))
    },[])
  return (
    <div>EjemploPromise</div>
  )
}


/*useEffect(()=>{
    getProducts()
    .then((res)=>console.log(res) )
    .catch((error)=>console.log(error))
},[]) */


export default EjemploPromise




