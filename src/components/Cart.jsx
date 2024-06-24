import { useId, useState } from 'react'
import { useCart } from '../hooks/useCart.js'
import { CartItem } from './CartItem.jsx'

import './css/Cart.css'

export function Cart () {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart } = useCart()
  const [cartActive, setCartActive] = useState(false)

  const classNameLabel = cartActive ? 'cart-button cart-button-active' : 'cart-button'

  return (
    <>
      <label className={classNameLabel} htmlFor={cartCheckboxId}>
        <i className='bi bi-cart-plus' />
      </label>
      <input id={cartCheckboxId} type='checkbox' className='input-cart' style={{ display: 'none' }} onChange={() => {setCartActive(!cartActive)}} />

      <div className='cont-cart'>
        <aside className='cart'>
          {
            cartActive
              ? <h3>Cart</h3>
              : <></>
          }
          <ul>
            {
              cart.map(product => (
                <CartItem
                  key={product.id}
                  addToCart={() => addToCart(product)}
                  {...product}
                />
              ))
            }
          </ul>

          {
            cart.length > 0
              ? <button onClick={clearCart} className='clear-cart'>Clear cart</button>
              : <></>
          }
        </aside>
      </div>
    </>
  )
}
