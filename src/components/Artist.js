import React, { useEffect, useState } from 'react'
import { getArtista } from '../helpers/getArtista'

const Artist = ({ idArtist }) => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const { link_bi, name, fans, img_medium, img_xl } = data
  useEffect(() => {
    getArtista(idArtist).then((resp) => {
      setData(resp)
      setLoading(false)
    })
  }, [idArtist])

  if (loading) {
    return <h6>Cargando informacion del artista</h6>
  }

  return (
    <div className='content-artist'>
      <div className='artist-img'>
        <img src={img_medium} alt='' />
      </div>
      <div className='artist-info' style={{ backgroundImage: `url(${img_xl})` }}>
        <p className='name-artist'>{name}</p>
        <p className='lo-mejor'>
          Lo mejor de {name} <span className='seguidores'> {fans} seguidores</span>
        </p>
        <p className='link-bi'>
          Si quieres conocer más de {name} dale click{' '}
          <a href={link_bi} target='_blank' rel='noreferrer'>
            aqui
          </a>
        </p>
        <div className='btns'>
          <button className='btn-reproducir'>Reproducir</button>
          <button className='btn-seguir'>seguir</button>
          <div className='card-three-artista'>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Artist
