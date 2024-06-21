import { ProductCard } from './ProductCard.jsx'

export default function Products ({ products }) {
  console.log(products)
  return (
    <main className='cont-products-grid'>
      <ul className='products-grid'>
        {(products && !(products.length === 0))
          ? products.map(p => (
            <ProductCard key={p.id} product={p} />
          ))
          : <p style={{ textAlign: 'center' }}>No hay productos disponibles</p>}
      </ul>
    </main>
  )
}
