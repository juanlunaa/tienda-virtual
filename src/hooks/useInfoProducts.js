import { useContext } from 'react'
import { InfoProductsContext } from '../context/infoProducts.jsx'

export function useInfoProducts () {
  const modalContext = useContext(InfoProductsContext)
  return modalContext
}
