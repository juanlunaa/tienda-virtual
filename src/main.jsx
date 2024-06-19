import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { FiltersProvider } from './context/filters.jsx'

/*
Envolvemos el componente "App" para que tenga acceso a la informacion que se definio en "FiltersContext", a su vez
los componentes que se encuentran envueltos por el componente "App" tambien tendran acceso a esta informacion
*/
createRoot(document.getElementById('root')).render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
)
