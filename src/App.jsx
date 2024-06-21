import { CartProvider } from './context/cart.jsx'

import { useFilters } from './hooks/useFilters.js'
import { useInfoProducts } from './hooks/useInfoProducts.js'
import { useModal } from './hooks/useModal.js'
import { useProducts } from './hooks/useProducts.js'

import { Cart } from './components/Cart.jsx'
import { Filters } from './components/Filters.jsx'
import { FormSearch } from './components/FormSearch.jsx'
import { Modal } from './components/Modal.jsx'
import { Products } from './components/Products.jsx'
import { ProductInfo } from './components/ProductInfo.jsx'

import './App.css'

function App () {
  const { products } = useProducts()
  const { applyFilters, changeSearchInpur, productSearch } = useFilters()
  const { productSelect } = useInfoProducts()

  const { openModal, closeModal } = useModal(productSelect)
  const filteredProducts = applyFilters(products)

  return (
    <CartProvider>
      <div>
        <header>
          <h1>Shoes Store</h1>
          <FormSearch productSearch={productSearch} changeSearchInpur={changeSearchInpur} />
        </header>
        <Cart />
        <main className='cont-products'>
          <Filters />
          <Products products={filteredProducts} />
        </main>
        {
          openModal &&
            <Modal isOpen={openModal} closeModal={closeModal}>
              <ProductInfo />
            </Modal>
        }
      </div>
    </CartProvider>
  )
}

export default App
