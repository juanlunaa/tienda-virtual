import { FormSearch } from './components/FormSearch.jsx'
import './App.css'
import { ProductsFilter } from './components/ProductsFilter.jsx'
import { useProducts } from './hooks/useProducts.js'
import Products from './components/Products.jsx'
import { useFilters } from './hooks/useFilters.js'

function App () {
  const { products } = useProducts()
  const { applyFilters, changeSearchInpur, productSearch } = useFilters()

  const filteredProducts = applyFilters(products)

  return (
    <div>
      <header>
        <h1>Shoes Store</h1>
        <FormSearch productSearch={productSearch} changeSearchInpur={changeSearchInpur} />
      </header>
      <main className='cont-products'>
        <ProductsFilter />
        <Products products={filteredProducts} />
      </main>
    </div>
  )
}

export default App
