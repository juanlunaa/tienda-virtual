import { createContext, useState } from 'react'

/*
Puntos claves al momento de usar un contexto
1. Crearlo
2. Proveerlo
3. Consumirlo

¿Cuándo usar un contexto?
Si lo queremos usar para estados globales como es el caso, pues es recomendable para estados que cambien
con poca frecuencia o que sean pequeños (Ej: Un estado para controlar cuando un usuario tiene la sesion
iniciada)
*/

/*
Se crear el contexto (El uso de este contexto es para tener un estado global)
Al momento de querer acceder a la informacion del contexto definida en el provider, debemos llamar es a esta const
Ej: "useContext(FiltersContext)" -> Esto nos va a retornar lo que estemos retornando en el value del provider
*/
export const FiltersContext = createContext()

/*
Se crea el provider que va a envolver a los componentes que necesiten tener acceso a la informacion de este
contexto.
El "provider" no deja de ser un componente de React, el cual recibe por paramentro el "children" (El o los
componentes que van a tener acceso a la informacion del contexto)
*/
export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    mark: [],
    price: 0
  })

  return (
    /*
    A "FiltersContext.Provider" se le tiene que pasar el valor que queremos que tenga el contexto por medio
    del atributo "value", el valor puede ser cualquier informacion a la cual queramos acceder desde los
    diferentes componente que se encuentran envueltos dentro del contexto
    */
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {
      /*
      La implementacion de este contexto esta en el main.jsx, ahi se envuelve el componente principal para que
      tenga acceso a la informacion definida anteriormente
      */
      children
      }
    </FiltersContext.Provider>
  )
}
