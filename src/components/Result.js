import React from 'react'
import { UseFetchSongs } from '../hooks/UseFetchSongs'
import CardSong from './CardSong'
export const Result = ({ valueSearch, setSongToPlay, setIdArtist }) => {
  const { data, loading } = UseFetchSongs(valueSearch, setSongToPlay, setIdArtist)

  if (loading) {
    return <h2>Cargando Datos...</h2>
  }

  return (
    <>
      <h3 className='result-title'>Resultados</h3>
      <div className='grid-cards'>
        {data.map((el) => (
          <CardSong el={el} setSongToPlay={setSongToPlay} setIdArtist={setIdArtist} key={el.id} />
        ))}
      </div>
    </>
  )
}
