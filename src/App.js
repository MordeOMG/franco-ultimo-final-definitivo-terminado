import React from 'react'
import './App.css'
import Navbar from '../src/Componentes/nav-bar.js'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Tarjetas from "../src/Componentes/Cartas/cards.js"

function App() {
  return (
    <div>
      <Navbar/>
      <Tarjetas/>
    </div>

  )
}

export default App

