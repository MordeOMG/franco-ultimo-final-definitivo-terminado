import React from 'react'
import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import './App.css'
import Img from './Recursos/img.png'
import { Dropdown} from 'react-bootstrap'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import {BrowserRouter,  Router, Routes, Route ,Link, Switch} from 'react-router-dom'
import Home from './Componentes/Pestañas/home/Home'


function navbar() {
  return (
    <div>
      <navbar className='nav-bar align-items-center justify-content d-flex flex-wrap text-bg-dark'>
          <Link to="/"><img src={Img} className="img-n"/></Link>
          <div className='indice'>
          <Link to="/Nosotros" className="txt-n  btn btn-outline-primary text-light" ><span>Home</span></Link>
          <Link to="/Contacto" className="txt-n  btn btn-outline-primary text-light" ><span>Nosotros</span></Link>
          <Link to="/Documentacion" className="txt-n  btn btn-outline-primary text-light" ><span>Documentación</span></Link>
          <Link to="/Redes-sociales" className="txt-n btn btn-outline-primary text-light" ><span>Clientes</span></Link>
          <Link to="/Redes-sociales" className="txt-n btn btn-outline-primary text-light" ><span>Contacto</span></Link>
          </div>
          <div className='botones d-flex alig-items-center text-end'>
            <input className="s-n form-control form-control-dark text-bg-dark" placeholder='Buscar'/>
            <a href="!#" className='button1 btn btn-primary'><span class="material-symbols-outlined">account_circle</span></a>
            <a href="https://github.com/MordeOMG/franco-ultimo-final-definitivo-terminado" target="_blank" rel="no_referer" className='button1 btn btn-primary'><span class="material-symbols-outlined">developer_mode</span></a>
          </div>
      </navbar>
     <div className="routes">
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Nosotros" element={<Home/>}/>
    <Route path="/Contacto" element={<Home/>}/>
    <Route path="/Documentación" element={<Home/>}/>
    <Route path="/redes-sociales" element={<Home/>}/>
    </Routes>
    </div> 
    </div>
  ) 
}

export default navbar


