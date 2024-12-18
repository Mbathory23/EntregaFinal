import React, {useState, useEffect} from 'react'
import { Button } from "react-bootstrap"
import ItemCount from "./ItemCount"
import { getProducts, productos } from "../mock/data"
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import Loader from './Loader'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../services/firebase'

const ItemListContainer = ({greeting, texto}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading]= useState(false)
    const {category}= useParams()

    //FIREBASE
    useEffect(()=>{
        setLoading(true)
        //Conectamos con nuestra coleccion
        const productsCollection = category 
        ? query(collection(db, "productos"), where("category", "==", category)) 
        : collection(db,"productos")
        //pedir documentos
        getDocs(productsCollection)
        .then((res)=>{
            const list = res.docs.map((product)=>{
                return{
                    id: product.id,
                    ...product.data()
                }
            })
            setProducts(list)
        } )
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[category])


    //MOCK LOCAL
    
    // const {greeting, texto} = props
    //console.log(category)

    //Por el momento.
    const onAdd = (cantidad) =>{
        alert(`Agregaste al carrito ${cantidad} productos`)
    }

   // useEffect(()=>{
   //     setLoading(true)
   //     getProducts()
   //     .then((res)=>{
   //         if(category){
   //             //filtrar 
   //             setProducts(res.filter((prod)=>prod.category === category))
   //         }else{
   //             setProducts(res)
   //         }
   //     })
   //     .catch((error)=> console.log(error))
   //     .finally(()=> setLoading(false))
   // },[category])

   //Funcion para agregar los items dinamicamente, una sola vez
//const addData = () => {
//    const collectionToAdd = collection(db, "productos")
//    productos.map((item)=>addDoc(collectionToAdd, item)) 
//}

   
    return(
        <div>
           {/*} <button onClick={addData}>Agregar a Firebase</button>*/}
            <h1 className="text-center">{greeting} <span style={{texTransform:'capitalize', color:'violet '}}>{category}</span></h1>
            {/* Ejemplos */}
            {/* <p>{texto}</p>
            <Button variant="primary">Primary</Button>
            <button type="button" className="btn btn-danger">Danger</button> */}
            {/* Esto mas adelante no va a estar en este componente */}
            {loading ? <Loader/>: <ItemList products={products}/>}
            <ItemCount stock={12} onAdd ={onAdd}/>
            


        </div>
    )
}
export default ItemListContainer