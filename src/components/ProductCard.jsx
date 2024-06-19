export function ProductCard ({ id, nombre, precio, numeroUnidades, imagen }) {
  return (
    <li className='cont-card-product'>
      <div>
        <div className='cont-image-product'>
          <img src={imagen} alt={nombre} />
        </div>
        <p><strong>{nombre}</strong></p>
      </div>
      <div className='cont-price-unid-product'>
        <p className='price-product'>${precio}</p>
        <p>Cant. {numeroUnidades}</p>
      </div>
    </li>
  )
}
