import { ProductCard } from './ProductCard.jsx'

export default function Products ({ products }) {
  return (
    <main className='cont-products-grid'>
      <ul className='products-grid'>
        {products
          ? products.map(p => (
            <ProductCard key={p.id} nombre={p.nombre} precio={p.precio} numeroUnidades={p.numeroUnidades} imagen={p.imagen} />
          ))
          : <p style={{ textAlign: 'center' }}>No hay productos disponibles</p>}
      </ul>
    </main>
  )
}
