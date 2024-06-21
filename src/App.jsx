import { FormSearch } from './components/FormSearch.jsx'
import './App.css'
import { ProductsFilter } from './components/ProductsFilter.jsx'
import { useProducts } from './hooks/useProducts.js'
import Products from './components/Products.jsx'
import { useFilters } from './hooks/useFilters.js'
import { useModal } from './hooks/useModal.js'
import ProductInfoModal from './components/ProductInfoModal.jsx'
import { useContext, useEffect } from 'react'
import { InfoProductsContext } from './context/infoProducts.jsx'

function App () {
  const { products } = useProducts()
  const { productSelect } = useModal()
  const { applyFilters, changeSearchInpur, productSearch } = useFilters()

  const filteredProducts = applyFilters(products)

  useEffect(() => {
    if (productSelect) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }

    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [productSelect])

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
      {productSelect && <ProductInfoModal product={productSelect} />}
    </div>
  )
}

export default App
