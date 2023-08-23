import ItemListContainer from './components/ItemListContainer.jsx'
import NavBar from './components/NavBar.jsx'
import React from 'react'

const App = () => {
  return (
    <div>
      <NavBar></NavBar>
      <ItemListContainer greeting={"Bienvenidos a la tienda de equipos de Ski y Snowboard"} />
    </div>
  )
}

export default App