import React from 'react'
import '../Carrusel/carrusel.css'

function carrusel() {
  return (
    <div> 
    <div id="carouselExampleInterval" className="banner carousel slide w-100" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img src="https://www.instasent.com/blog/wp-content/uploads/2019/09/cover_6_ejemplos_banners.png" class="d-block w-100" alt="first Image"/>
      </div>
      <div className="carousel-item" >
        <img src="https://www.instasent.com/blog/wp-content/uploads/2019/09/cover_6_ejemplos_banners.png" class="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://www.instasent.com/blog/wp-content/uploads/2019/09/cover_6_ejemplos_banners.png" class="d-block w-100" alt="..."/>
      </div>
      <div className="carousel-item">
        <img src="https://www.instasent.com/blog/wp-content/uploads/2019/09/cover_6_ejemplos_banners.png" class="d-block w-100" alt="..."/>
      </div>
    </div>
  </div>
    </div>
  )
}

export default carrusel
