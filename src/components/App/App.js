import React from 'react'
import './App.css'
import Products from '../Products/Products'
import { fetchProducts } from '../../utils/fetcher'
import Cart from '../Cart/Cart'

export default function App() {
  const [loading, setLoading] = React.useState(true)
  const [products, setProducts] = React.useState([])
  const [cart, setCart] = React.useState([])
  const numberToLoadMore = 5

  const findProductIndexInCart = (product) => {
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === product.id) return i
    }
  }

  const addProductToCart = (product) => {
    const productIndex = findProductIndexInCart(product)

    if (productIndex !== undefined) setCart(cart => cart.map((product, index) => index === productIndex ? { ...product, amount: cart[productIndex].amount + 1 } : product))
    else setCart(cart => [...cart, { ...product, amount: 1 }])
  }

  const loadMoreProducts = async () => {
    const moreProducts = await fetchProducts(products.length + numberToLoadMore)
    setProducts(moreProducts)
  }

  React.useEffect(() => {
    setLoading(false)

    const fetchData = async () => {
      const tenProducts = await fetchProducts(10)
      setProducts(tenProducts)
    }

    fetchData()
  }, [])

  console.log(cart)

  return (
    <>
      {loading ? (
        <>Loading ...</>
      ) : (
        <div className='container'>
          <Products products={products} addProductToCart={addProductToCart} loadMoreProducts={loadMoreProducts} />
          {cart.length > 0 && <Cart cart={cart} />}
        </div>
      )}
    </>
  )
}
