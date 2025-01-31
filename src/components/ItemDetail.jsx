import React, { useContext, useState } from 'react'
import ItemCount from './ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContex'

const ItemDetail = ({producto}) => {
  const [compra, setCompra] = useState(false)
  const {addToCart, cart} = useContext(CartContext)
    const onAdd = (cantidad) => {
      setCompra(true)
     // let cartItem = {
     //   name: producto.name,
     //   img: producto.img,
     //   price: producto.price,
     //   producto: producto.stock,
     //   id: producto.id
     // }
     // addToCart(cartItem, cantidad)
      addToCart(producto, cantidad)
      // alert(`Agregaste al carrito ${cantidad} productos`)
       console.log(cart) 
    }
  return (
    <div>
        <h1>Detalle del producto:{producto.name}</h1>
        <img src={producto.img} alt={producto.img}/>
        <p>{producto.description}</p>
        <p>${producto.price}</p>
        {compra 
        ? <div>
          <Link className='btn btn-dark' to='/'>Seguir comprando</Link>
          <Link className='btn btn-dark' to='/cart'>Ir al carrito</Link>
        </div>  
        : <ItemCount stock={producto.stock} onAdd={onAdd}/>}
    </div>
  )
}


export default ItemDetail