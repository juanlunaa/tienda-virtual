import { useId } from 'react'
import './css/Cart.css'
import { useCart } from '../hooks/useCart'
import { CartItem } from './CartItem.jsx'

export function Cart () {
  const cartCheckboxId = useId()
  const { cart, clearCart, addToCart } = useCart()

  return (
    <>
      <label className='cart-button' htmlFor={cartCheckboxId}>
        <i className='bi bi-cart-plus' />
      </label>
      <input id={cartCheckboxId} type='checkbox' hidden />

      <aside className='cart'>
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
    </>
  )
}
