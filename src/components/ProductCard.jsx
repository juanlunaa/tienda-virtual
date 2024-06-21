import { useInfoProducts } from '../hooks/useInfoProducts.js'

export function ProductCard ({ id, thumbnail, title, description, numberUnits, price, images, addToCart, removeToCart, isProductInCart }) {
  const { setProductSelect } = useInfoProducts()

  const handleClick = () => {
    setProductSelect({ id, thumbnail, title, description, numberUnits, price, images })
  }

  return (
    <li className='cont-card-product'>

      <div onClick={handleClick}>
        <div className='cont-image-product'>
          <img src={thumbnail} alt={title} />
        </div>
        <p><strong>{title}</strong></p>
      </div>

      <div className='cont-price-unid-product'>
        <p className='price-product'>${price}</p>
        <p>Cant. {numberUnits}</p>
      </div>

      <button
        onClick={isProductInCart
          ? removeToCart
          : addToCart}
        style={isProductInCart
          ? { background: 'red' }
          : {}}
      >
        <i className={
          isProductInCart
            ? 'bi bi-cart-dash'
            : 'bi bi-cart-plus'
        }
        />
      </button>

    </li>
  )
}
