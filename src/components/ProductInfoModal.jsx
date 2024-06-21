import { useRef } from 'react'
import { useModal } from '../hooks/useModal.js'

function ProductInfoModal ({ product }) {
  const { setProductSelect } = useModal()
  const mainImgRef = useRef(null)

  const handleClick = () => {
    setProductSelect(null)
  }

  const changeMainImage = (event) => {
    mainImgRef.current.src = event.target.src
  }

  return (
    <section className='modal-product-info'>
      <div className='cont-product-info'>
        <span onClick={handleClick} className='close-modal-product'><i className='bi bi-x-lg' /></span>
        <div className='gallery-images'>
          <img ref={mainImgRef} src={product.imagenes[0].url} alt='Imagen principal' className='main-image' />
          <div className='all-images'>
            {product.imagenes && product.imagenes.map((img, index) => (
              <img key={img.id} src={img.url} alt={`${product.nombre} imagen #${index}`} className='secondary-image' onClick={changeMainImage} />
            ))}
          </div>
        </div>
        <div className='product-info'>
          <div>
            <h2>{product.nombre}</h2>
            <p>{product.descripcion}</p>
          </div>

          <div>
            <div className='cont-sale-info'>
              <span>Units available: {product.numeroUnidades}</span>
              <span className='price-modal'>${product.precio}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'end' }}>
              <button className='add-to-cart'>Add to cart <i className='bi bi-cart-plus' /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductInfoModal
