import { useContext } from 'react'
import { useModal } from '../hooks/useModal.js'
import { InfoProductsContext } from '../context/infoProducts.jsx'

export function ProductCard ({ product }) {
  const productCopy = product
  const { setProductSelect } = useModal()

  const handleClick = () => {
    setProductSelect(product)
  }

  return (
    <li className='cont-card-product' onClick={handleClick}>
      <div>
        <div className='cont-image-product'>
          <img src={product.miniatura} alt={product.nombre} />
        </div>
        <p><strong>{product.nombre}</strong></p>
      </div>
      <div className='cont-price-unid-product'>
        <p className='price-product'>${product.precio}</p>
        <p>Cant. {product.numeroUnidades}</p>
      </div>
    </li>
  )
}
