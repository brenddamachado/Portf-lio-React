import React from 'react'
import foto from '../img/eu.jfif'
import '../styles/components/sidebar.sass'
import SocialNetworks from './SocialNetworks'
export const Sidebar = () => {
  return <aside id='sidebar'>
   <img src={foto} alt="Brenda Machado" />

    <p className="title">Desenvolvedora </p>
   <SocialNetworks />
    <p>informaçoes de contato</p>
    <a href="" className='btn'>
      download curriculo
    </a>

  </aside>
}
