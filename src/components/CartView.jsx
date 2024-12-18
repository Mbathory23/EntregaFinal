import React from 'react'
import { useCart } from '../context/CartContex'
import EmpyCart from './EmpyCart'
import CartList from './CartList'

const CartView = () => {
    const {cart} = useCart()
    return (
        <div>
            {!cart.length
                ? <EmpyCart/>
                : <div>
                    <h2>Tu carrito</h2>
                    <CartList/>
                </div>
            }
        </div>
    )
}

export default CartView