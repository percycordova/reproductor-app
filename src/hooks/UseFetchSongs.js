import { useEffect, useState } from 'react'
import { getAll } from '../helpers/getAll'

export const UseFetchSongs = (value_search, setSongToPlay, setIdArtist) => {
  const [state, setstate] = useState({
    data: [],
    loading: true
  })

  useEffect(() => {
    getAll(value_search).then((elements) => {
      setstate({
        data: elements,
        loading: false
      })
      setSongToPlay(elements[0])
      setIdArtist(elements[0].id_artista)
    })
  }, [value_search, setSongToPlay, setIdArtist])

  return state //{data:[], loading:true}
}
