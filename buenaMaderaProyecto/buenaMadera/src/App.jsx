import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componentes/NavBar/navBar'
import { ItemListContainer } from './componentes/ItemListConteniner/ItemListContainer'

function App() {
  

  return (
    <>
      <NavBar/>
      <ItemListContainer greeting="producto"/>

    </>
  )
}

export default App
