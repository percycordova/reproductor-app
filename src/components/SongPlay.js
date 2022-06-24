import React from 'react'

export const SongPlay = ({ songToPlay }) => {
  return (
    <>
      {!songToPlay ? (
        <>
          <div className='song-play-img'>
            <img src='' alt='' />
          </div>
          <div className='song-play-title'>
            <p>sin resultados</p>
          </div>
          <div className='song-play-player'>sin resultados</div>
        </>
      ) : (
        <>
          <div className='song-play-img'>
            <img src={songToPlay.img} alt={songToPlay.title} />
          </div>
          <div className='song-play-title'>
            <p>{songToPlay.title}</p>
            <p>
              {songToPlay.artist} - {songToPlay.album}
            </p>
          </div>
          <div className='song-play-player'>
            <audio src={songToPlay.mp3} autoplay='false' controls></audio>
          </div>
        </>
      )}
    </>
  )
}
