import React from 'react'
import './Products.css'
import Product from '../Product/Product'

export default function Products({ products, addProductToCart, loadMoreProducts }) {
  return (
    <div className='products-container'>
      <h2>Products</h2>
      <div className='products-table'>
        {products.map(product =>
          <Product key={product.id} product={product} addProductToCart={addProductToCart} />
        )}
        <div className='product-card'>
          <button onClick={() => loadMoreProducts()}>Load more</button>
        </div>
      </div>
    </div>
  )
}
