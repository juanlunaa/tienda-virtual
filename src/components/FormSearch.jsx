export function FormSearch ({ productSearch, changeSearchInpur }) {
  const handleChange = (event) => {
    changeSearchInpur(event)
  }

  return (
    <form className='form-search-product'>
      <input placeholder='Search products by name ...' onChange={handleChange} value={productSearch} />
    </form>
  )
}
