import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    // Miro si el producto ya esta en el carrito, si este es el caso solo debo sumarle 1 a la cantidad
    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    if (productInCartIndex >= 0) {
      /*
      Hago un copia produnda del carrito actual para modificar la copia y no directamente el estado del carrito
      -> Uso el metodo "structuredClone()" por que este hace una copia profunda del array,
      no uso el spread operator para hacer la copia porque este hace una copia superficial [...cart] y
      podria dar problemas
      */
      const newCart = structuredClone(cart)
      // Se modifica la cantidad del producto en la copia y luego se actualiza el estado en base a esta copia
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }

    // Si el producto no esta en el carrito
    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }

  const removeToCart = (product) => {
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  const clearCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeToCart,
      clearCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
