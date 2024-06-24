import { useCart } from '../hooks/useCart.js'
import { ProductCard } from './ProductCard.jsx'

export function Products ({ products }) {
  const { addToCart, removeToCart, checkProductInCart } = useCart()

  return (
    <main className='cont-products-grid'>

      <ul className='products-grid'>

        {(products && !(products.length === 0))
          ? products.map(p => (
            <ProductCard
              key={p.id}
              {...p}
              addToCart={() => addToCart(p)}
              removeToCart={() => removeToCart(p)}
              isProductInCart={checkProductInCart(p)}
            />
          ))
          : <p style={{ textAlign: 'center' }}>No hay productos disponibles</p>}

      </ul>

    </main>
  )
}
