import React from 'react'
import './Cart.css'
import CartProduct from '../CartProduct/CartProduct'
import { formatPrice } from '../../utils/formatter'

export default function Cart({ cart }) {
  const getTotalValueFromCart = () => cart.reduce((prev, curr) => prev + curr.price * curr.amount, 0)

  return (
    <div className='cart-container'>
      <h2>Cart</h2>
      <div className='cart-products'>
        {cart.map(product => <CartProduct key={product.id} product={product} />)}
      </div>
      <div className='cart-total'>
        <h3>Total</h3>
        <span>{formatPrice(getTotalValueFromCart())}</span>
      </div>
    </div>
  )
}
