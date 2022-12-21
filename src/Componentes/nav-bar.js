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
        <img src={Img} className="img-n"></img>
        <form name='botones' class="btn-group" role="group" aria-label="Basic radio toggle button group">
        
        <input type="radio" class="txt-n btn-check" name="btnradio" id="btnradio1" autocomplete="off" value="1"/>
        <label class="txt-n text-light btn btn-outline-primary" for="btnradio1" >Home</label>

        <input type="radio" class="txt-n btn-check" name="btnradio" id="btnradio2" autocomplete="off" value="2"/>
        <label className="txt-n text-light btn btn-outline-primary" for="btnradio2">Nosotros</label>

        <input type="radio" class="txt-n btn-check" name="btnradio" id="btnradio3" autocomplete="off" value="3"/>
        <label class="txt-n text-light btn btn-outline-primary" for="btnradio3">Clientes</label>

        <input type="radio" class="txt-n btn-check" name="btnradio" id="btnradio4" autocomplete="off" value="4"/>
        <label class="txt-n text-light btn btn-outline-primary" for="btnradio4">Documentación</label>

        <input type="radio" class="txt-n btn-check" name="btnradio" id="btnradio5" autocomplete="off" value="5"/>
        <label class="txt-n text-light btn btn-outline-primary" for="btnradio5">Contacto</label>
    </form>
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
