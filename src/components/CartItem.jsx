export function CartItem ({ thumbnail, title, price, quantity, addToCart }) {
  return (
    <li>
      <img
        src={thumbnail}
        alt={title}
      />
      <div id='name-price'>
        <strong>{title}</strong><span> - ${price}</span>
      </div>

      <footer>
        <small>Cant: {quantity}</small>
        <button onClick={addToCart}>+</button>
      </footer>
      <hr />
    </li>
  )
}
