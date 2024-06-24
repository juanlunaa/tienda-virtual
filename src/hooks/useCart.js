import { useContext } from 'react'
import { CartContext } from '../context/cart'

export function useCart () {
  const cartContext = useContext(CartContext)

  /*
  Es una buena practica revisar si el contexto es "undefined", ya que esto quiere decir que
  desde el componente que estamos accediendo no esta envuelto por le Provider que provee el
  contexto
  */
  if (cartContext === undefined) {
    throw new Error('useCart no puede ser usado sin CartProvider')
  }

  const { cart, addToCart, removeToCart, clearCart } = cartContext

  const checkProductInCart = (product) => {
    return cart.some(item => item.id === product.id)
  }

  return { cart, addToCart, removeToCart, clearCart, checkProductInCart }
}
