import { createContext, useState } from 'react'

export const InfoProductsContext = createContext()

export function InfoProductsProvider ({ children }) {
  const [productSelect, setProductSelect] = useState(null)

  return (
    <InfoProductsContext.Provider value={{
      productSelect,
      setProductSelect
    }}
    >
      {children}
    </InfoProductsContext.Provider>
  )
}
