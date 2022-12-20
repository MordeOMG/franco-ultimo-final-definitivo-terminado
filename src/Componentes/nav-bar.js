import React from 'react'
import './componentes.css'
import Img from'../Recursos/img.png'
import { Dropdown } from 'react-bootstrap'
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle'
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu'
import DropdownItem from 'react-bootstrap/esm/DropdownItem'


function navbar() {
  return (
    <div>
      <div className='nav-bar container-fluid align-items-center d-flex justify-content-center flex-wrap text-bg-dark'>
        <div class="m-o-nv">
        <Dropdown>
          <DropdownToggle className="dw-b ">
          <span class="material-symbols-outlined">menu</span>
          </DropdownToggle>
          <DropdownMenu className='dropdown-menu'>
            <DropdownItem>
            <a href="#!" className='txt-na text-secondary text-decoration-none'>Home</a>
            </DropdownItem>
            <DropdownItem>
            <a href="#!" className='txt-na text-secondary text-decoration-none'>Nosotros</a>
            </DropdownItem>
            <DropdownItem>
            <a href="#!" className='txt-na text-secondary text-decoration-none'>Nuestros Clientes</a>
            </DropdownItem>
            <DropdownItem>
            <a href="#!" className='txt-na text-secondary text-decoration-none'>Documentación</a>
            </DropdownItem>
            <DropdownItem>
            <a href="#!" className='txt-na text-secondary text-decoration-none'>Contactanos</a>
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        </div>
        <div className='d-flex tit align-items-center'>
        <a href="#!">
            <img className="img-n " alt="logo-compañia" src={Img}/>
        </a>
        <a href="#!" className='txt-na text-secondary text-decoration-none'>
            Home
        </a>
        <a href="#!" className='txt-n text-secondary text-decoration-none'>
            Nosotros
        </a>
        <a href="#!" className='txt-n text-secondary text-decoration-none'>
            Nuestos Clientes
        </a>
        <a href="#!" className='txt-n text-secondary text-decoration-none'>
            Documentacion
        </a>
        <a href="#!" className='txt-n text-secondary text-decoration-none'>
            Contactanos
        </a>
        </div>
        <div className='int d-flex alig-items-center'>
            <input className="s-n form-control form-control-dark text-bg-dark" placeholder='Buscar'></input>
            <div className='n d-flex alig-items-center text-end'>
                <button className='button1 btn btn-secondary'>Iniciar Sesion</button>
                <button className='button2 btn btn-primary'>Registrarse</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default navbar
