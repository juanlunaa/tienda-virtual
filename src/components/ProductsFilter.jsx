import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'

export function ProductsFilter () {
  const { filters, setFilters } = useFilters()

  const inputMarkFilterNike = useId()
  const inputMarkFilterAdidas = useId()
  const inputMarkFilterConverse = useId()
  const inputMarkFilterNewBalance = useId()
  const inputRangePrice = useId()

  const handleMarkFilter = (event) => {
    const newMarkValue = event.target.value
    const isChecked = event.target.checked

    setFilters(prevState => {
      const newMarkArray = isChecked
        ? [...prevState.mark, newMarkValue]
        : prevState.mark.filter(mark => mark !== newMarkValue)

      return {
        ...prevState,
        mark: newMarkArray
      }
    })
  }

  const handlePriceRange = (event) => {
    setFilters(prevState => ({
      ...prevState,
      price: event.target.value
    }))
  }

  const checkboxIsCheked = (value) => {
    return filters.mark.includes(value)
  }

  return (
    <section className='cont-filters-products'>
      <h2>Filtros</h2>
      <div className='mark-filter'>
        <p>Marca</p>
        <ul>
          <li>
            <input type='checkbox' id={inputMarkFilterNike} value='nike' onChange={handleMarkFilter} checked={checkboxIsCheked('nike')} />
            <label htmlFor={inputMarkFilterNike}>Nike</label>
          </li>

          <li>
            <input type='checkbox' id={inputMarkFilterAdidas} value='adidas' onChange={handleMarkFilter} checked={checkboxIsCheked('adidas')} />
            <label htmlFor={inputMarkFilterAdidas}>Adidas</label>
          </li>

          <li>
            <input type='checkbox' id={inputMarkFilterConverse} value='converse' onChange={handleMarkFilter} checked={checkboxIsCheked('converse')} />
            <label htmlFor={inputMarkFilterConverse}>Converse</label>
          </li>

          <li>
            <input type='checkbox' id={inputMarkFilterNewBalance} value='new-balance' onChange={handleMarkFilter} checked={checkboxIsCheked('new-balance')} />
            <label htmlFor={inputMarkFilterNewBalance}>New Balance</label>
          </li>
        </ul>
      </div>
      <div className='price-mark'>
        <label htmlFor={inputRangePrice}><strong>Precio</strong></label>
        <input type='range' id={inputRangePrice} min='0' max='900' onChange={handlePriceRange} style={{ background: '#cdcdcd' }} value={filters.price} />
        <span>${filters.price}</span>
      </div>
    </section>
  )
}
