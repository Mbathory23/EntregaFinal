import React from 'react'
import CartItem from './CartItem'
import { useCart } from '../context/CartContex'
import { Link } from 'react-router-dom'


const CartList = () => {
    const {cart, cartTotal, clear} = useCart()
  return (
    <div>
        {cart.map((prod)=> <CartItem key={prod.id} prod={prod}/>)}
        <span>Total a pagar: ${cartTotal()}</span>
        <div style={{
             display:'flex',  
            justifyContent:'space-between',
            alignItems:'center',
            padding:'2rem',
        }}>
            <button className='btn btn-danger' onClick={clear}>Borrar carrito</button>
            <Link className='btn btn-success' to='/checkout'>Terminar compra</Link>
        </div>
    </div>
  )
}

export default CartList