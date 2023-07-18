import React from 'react'
import './CartProduct.css'
import { formatPrice } from '../../utils/formatter'

export default function CartProduct({ product }) {
  return (
    <div className='cart-product'>
      <img src={product.image} alt={product.title} />
      <span>{product.title}</span>
      <span>{`${product.amount}x`}</span>
      <span>{formatPrice(product.price * product.amount)}</span>
    </div>
  )
}
