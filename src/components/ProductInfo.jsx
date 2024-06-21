import { useRef } from 'react'
import { useInfoProducts } from '../hooks/useInfoProducts.js'

export function ProductInfo () {
  const { productSelect } = useInfoProducts()
  const { title, description, numberUnits, price, images } = productSelect
  const mainImgRef = useRef(null)

  const changeMainImage = (event) => {
    mainImgRef.current.src = event.target.src
  }

  return (
    <>
      <div className='gallery-images'>
        <img ref={mainImgRef} src={images[0].url} alt='Imagen principal' className='main-image' />
        <div className='all-images'>
          {images && images.map((img, index) => (
            <img key={img.id} src={img.url} alt={`${title} imagen #${index}`} className='secondary-image' onClick={changeMainImage} />
          ))}
        </div>
      </div>
      <div className='product-info'>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div>
          <div className='cont-sale-info'>
            <span>Units available: {numberUnits}</span>
            <span className='price-modal'>${price}</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'end' }}>
            <button className='add-to-cart'>Add to cart <i className='bi bi-cart-plus' /></button>
          </div>
        </div>
      </div>
    </>
  )
}
