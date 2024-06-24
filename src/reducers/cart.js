// Implementacion de "reducer" y el hook "useReducer(reducer, initialState)"

/*
Este es el estado inicial que queremos que tenga nuestro reducer, en mi caso quiero recuperar el que esta
en "localStorage" o si no hay nada que inicie vacio
*/
export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || []

/*
Es una buena practica tener los tipos de acciones en un "enum" para evitar los errores ortograficos
al momento de pasar la acciones o compararlas
*/
export const CART_ACTION_TYPES = {
  ADD_PRODUCT_TO_CART: 'ADD_PRODUCT_TO_CART',
  REMOVE_PRODUCT_TO_CART: 'REMOVE_PRODUCT_TO_CART',
  CLEAR_CART: 'CLEAR_CART'
}

/*
Definimos este metodo para que al realizar cada accion se guarde en "localStorage" el estado del carrito
*/
export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

/*
La funcion "reducer = (state, action) => newState" se encarga de determinar cómo cambia el estado (state)
en base a una acción (action), es decir, en base a la acción que se recibe por parametro nos va a retornar
un nuevo estado (newState)
*/
export const cartReducer = (state, action) => {
  /*
  El parametro "action" debe venir con los valores de "type" y "payload" (Este ultimo solo si es necesario)

  -> "type" es el valor que va a determinar a que condicion del switch se quiere entrar, es decir,
  sirve para elegir que porcion de código se quiere ejecutar

  -> "payload" es la informacion o objeto que se necesita para que se pueda operar, por ejemplo, en este
  caso las funciones operan sobre el carro de compra (el "state") en base a un objeto producto que viene cargado en el
  "payload", "ADD_PRODUCT_TO_CART" necesita el id del producto para ver si ya esta en el carrito (el state) y
  si no esta lo que hace es meter el objeto completo al carrito inicializando su cantidad en 1
  */
  const { type: actionType, payload: actionPayload } = action

  /*
  Evaluamos el tipo de acción que se quiere realizar (type)
  */
  switch (actionType) {
    case CART_ACTION_TYPES.ADD_PRODUCT_TO_CART: {
      const { id } = actionPayload
      /*
      Con esto obtenemos el index de el producto en el carrito si es que esta
      */
      const productInCartIndex = state.findIndex(item => item.id === id)

      /*
      Si esta, se hace una copia del carrito, se accede al producto con el index obtenido y directamente
      se aumenta su cantidad en uno
      */
      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        updateLocalStorage(newState)
        return newState
      }

      /*
      Si no esta, se añade directemente al carrito y se inicializa su cantidad en 1
      */
      const newState = [
        ...state,
        {
          ...actionPayload,
          quantity: 1
        }
      ]
      updateLocalStorage(newState)
      return newState
    }

    case CART_ACTION_TYPES.REMOVE_PRODUCT_TO_CART: {
      const { id } = actionPayload
      const newState = state.filter(item => item.id !== id)
      updateLocalStorage(newState)
      return newState
    }

    case CART_ACTION_TYPES.CLEAR_CART: {
      updateLocalStorage([])
      return []
    }
  }

  /*
  Si el action no entra en ninguna condicion del switch se va a retornar el mismo estado que estaba antes
  */
  return state
}
