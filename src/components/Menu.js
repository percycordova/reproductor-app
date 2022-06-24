import React from 'react'
import logo from '../assets/logo-foxbel.png'
export const Menu = () => {
  return (
    <div className='content-sidebar'>
      <div className='logo'>
        <img src={logo} alt='' />
      </div>
      <nav className='menu'>
        <h2 className='menu-title'>Mi Librería</h2>
        <a href='./'>Recientes</a>
        <a href='./'>Artistas</a>
        <a href='./'>Álbums</a>
        <a href='./'>Canciones</a>
        <a href='./'>Estaciones</a>
        <h2 className='menu-title-2'>Playlist</h2>
        <a href='./'>Metal</a>
        <a href='./'>Para Bailar</a>
        <a href='./'>Rock 90s</a>
        <a href='./'>Baladas</a>
      </nav>
    </div>
  )
}
