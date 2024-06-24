import { useReducer } from 'react'
import { cartReducer, cartInitialState, CART_ACTION_TYPES } from '../reducers/cart.js'

export function useCartReducer () {
  /*
  Implementacion de "useReducer(reducer, initialState, ?init) => [state, dispatch]" recibe por
  parametro hasta 3 elementos:
  -> "reducer": La funcion que definimos en '/reducers/cart.js' la cual nos va a dar un nuevo estado dependiendo
  la accion que queramos hacer
  -> "initalState": El valor inicial que queremos que tenga nuestro estado (definido en '/reducers/cart.js')
  -> "?init": Es un parametro opcional y es una funcion la cual se usa para crear el estado inicial
  en caso de que "initialState" sea complejo. Se llama una vez al inicio y puede hacer lógica adicional
  para calcular el estado inicial.

  Este hook nos devuelve un array con dos elementos:
  -> "state": El estado actual
  -> "dispatch": Es la función que se va a encargar de enviar las acciones al reducer
  */
  const [state, dispatch] = useReducer(cartReducer, cartInitialState)

  /*
  Usamos "dispatch({ type, ?payload })" para que nuestro "state" (el carrito) cambien en base a la
  acción qu el eestamos definiendo en el "type"
  */
  const addToCart = product => dispatch({
    type: CART_ACTION_TYPES.ADD_PRODUCT_TO_CART,
    payload: product
  })

  const removeToCart = product => dispatch({
    type: CART_ACTION_TYPES.REMOVE_PRODUCT_TO_CART,
    payload: product
  })

  /*
  Aca no le colocamos el "payload" al dispatch porque si nos fijamos en el reducer esta accion no
  lo necesita
  */
  const clearCart = () => dispatch({
    type: CART_ACTION_TYPES.CLEAR_CART
  })

  return { state, addToCart, removeToCart, clearCart }
}
