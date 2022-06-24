import React from 'react'
import iconUser from '../assets/icono-user.svg'
export const User = () => {
  return (
    <div className='content-user'>
      <img src={iconUser} alt='' />
      <p className='user-name'>Percy C.</p>
    </div>
  )
}
