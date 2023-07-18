export const fetchProducts = async number => {
  return await fetch(`https://fakestoreapi.com/products?limit=${number}`)
    .then(res => res.json())
}