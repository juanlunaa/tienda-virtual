import { useContext, useState } from 'react'
import { formatStringToCompare } from '../logic.js'
import { FiltersContext } from '../context/filters.jsx'

export function useFilters () {
  const [productSearch, setProductSearch] = useState('')
  /*
  Consumo de la informacion que esta en el context, en este caso nos retorna la informacion del estado
  */
  const { filters, setFilters } = useContext(FiltersContext)

  const changeSearchInpur = (event) => {
    setProductSearch(event.target.value)
  }

  const applyFilters = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.price &&
        (
          filters.mark.includes(formatStringToCompare(product.brand)) ||
          filters.mark.length === 0
        ) &&
        (
          formatStringToCompare(product.title).includes(formatStringToCompare(productSearch)) ||
          product === ''
        )
      )
    })
  }

  return { applyFilters, filters, setFilters, changeSearchInpur, productSearch }
}
