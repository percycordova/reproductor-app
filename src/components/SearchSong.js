import React, { useState } from 'react'
import iconSearch from '../assets/icono-lupa.svg'
export const SearchSong = ({ setValueSearch }) => {
  const [inputValue, setInputValue] = useState('')

  //Manejador de mi input
  const handdleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  //manejador del enter
  const handleSubtmit = (e) => {
    e.preventDefault()

    if (inputValue.trim().length >= 2) {
      setValueSearch(inputValue)
      setInputValue('')
    } else {
      setInputValue('')
    }
  }

  return (
    <>
      <form onSubmit={handleSubtmit} className='search'>
        <input
          type='text'
          value={inputValue}
          onChange={handdleInputChange}
          className='search-input'
          maxLength='30'
          placeholder='Buscar'
        />
        <img
          src={iconSearch}
          alt=''
          className='search-icon'
          onClick={() => {
            if (inputValue.trim().length >= 2) {
              setValueSearch(inputValue)
              setInputValue('')
            } else {
              setInputValue('')
            }
          }}
        />
      </form>
    </>
  )
}
