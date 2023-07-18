import React from 'react'
import './Product.css'
import { formatPrice } from '../../utils/formatter'

export default function Product({ product, addProductToCart }) {
  return (
    <div className='product-card'>
      <div className='rating'>
        <img src='./star.png' alt='rating start' />
        <span>{product.rating.rate}</span>
      </div>
      <img src={product.image} alt={product.title} />
      <div className='product-desc'>
        <span className='product-name'>{product.title}</span>
        <span className='product-price'>{formatPrice(product.price)}</span>
        <button onClick={() => addProductToCart(product)}>Add to cart</button>
      </div>
    </div>
  )
}
