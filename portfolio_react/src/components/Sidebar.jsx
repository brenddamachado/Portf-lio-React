import React from 'react'
import foto from '../img/eu.jfif'
import '../styles/components/sidebar.sass'
export const Sidebar = () => {
  return <aside id='sidebar'>
   <img src={foto} alt="Brenda Machado" />

    <p className="title">Desenvolvedora </p>
    <p>redes sociais</p>
    <p>informaçoes de contato</p>
    <a href="" className='btn'>
      download curriculo
    </a>

  </aside>
}
