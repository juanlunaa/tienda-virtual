import { useEffect, useState } from 'react'
import { getAllProducts } from '../services/products.js'

export function useProducts () {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const getData = async () => {
      const allProducts = await getAllProducts()
      setProducts(allProducts)
    }
    getData()
  }, [])

  return { products }
}
