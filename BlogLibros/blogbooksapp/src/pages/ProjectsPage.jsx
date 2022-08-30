import React from 'react'
import CardProject from '../components/Card';


const ProjectsPage = () => {
  return (
    <div>
      <section className="container">
        <CardProject titulo="selestyle" subtitulo="Catalogo Online" descripcion="Tienda online de calzado e indumentaria"/>
        <CardProject titulo="Muebles-Magallanes" descripcion="Ecommerce de ventas de muebles" subtitulo="Ecommerce Pyme"/>
        <CardProject titulo="Le-Mark" descripcion="Menú del restaurante, con precios y platos" subtitulo="Pizzería y Hamburguesería"/> 
      </section>
    </div>
  )
}

export default ProjectsPage