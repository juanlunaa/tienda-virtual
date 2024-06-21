import { useContext } from 'react'
import { InfoProductsContext } from '../context/infoProducts.jsx'

export function useModal () {
  const { productSelect, setProductSelect } = useContext(InfoProductsContext)
  return { productSelect, setProductSelect }
}
