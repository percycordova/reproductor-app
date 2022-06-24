import React, { useState } from 'react'
import { Result } from './Result'
import { Menu } from './Menu'
import { SearchSong } from './SearchSong'
import { User } from './User'
import { SongPlay } from './SongPlay'
import Artist from './Artist'

export const FoxbelMusicApp = () => {
  const initial = 'my universe'
  const [valueSearch, setValueSearch] = useState(initial)
  const [idArtist, setIdArtist] = useState(0)
  const [SongToPlay, setSongToPlay] = useState({})

  return (
    <div className='main'>
      <nav className='content-1'>
        <Menu />
      </nav>
      <section className='content-2'>
        <div className='content-2-search-user'>
          <SearchSong setValueSearch={setValueSearch} />
          <User />
        </div>
        <div className=''>
          <Artist idArtist={idArtist} />
        </div>
        <div className='content-2-result'>
          <Result
            valueSearch={valueSearch}
            setIdArtist={setIdArtist}
            setSongToPlay={setSongToPlay}
          />
        </div>
      </section>
      <div className='song-play'>
        <SongPlay valueSearch={valueSearch} songToPlay={SongToPlay} />
      </div>
    </div>
  )
}
