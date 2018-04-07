/// Gif Search
client.search('gifs', {})
  .then((response) => {
    response.data.forEach((gifObject) => {
      console.log(gifObject)
    })
  })
  .catch((err) => {

  })

/// Sticker Search
client.search('stickers', {"q": "cats"})
  .then((response) => {

  })
  .catch((err) => {

  })
