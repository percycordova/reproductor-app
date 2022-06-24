export const getAll = async (value_search = 'lo ultimo') => {
  const url = `https://deezerdevs-deezer.p.rapidapi.com/search?q=${encodeURI(value_search)}`

  let resp = await fetch(url, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '5cb7706abcmsh52ed7934a99a06ep15d9a2jsnffa41311ac30',
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com'
    }
  })

  const { data } = await resp.json()

  const arrayObject = data.map((el) => {
    return {
      id: el.id,
      id_artista: el.artist.id,
      title: el.title_short,
      artist: el.artist.name,
      img: el.album.cover_medium,
      img_xs: el.album.cover_small,
      mp3: el.preview,
      album: el.album.title
    }
  })

  return arrayObject
}
