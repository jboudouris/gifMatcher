const PUBLIC_KEY = '6GcvQNz3vsFlJgGAcYc7Y4E6RRoylnTH';
const BASE_URL = 'api.giphy.com/v1/gifs/';
const ENDPOINT = 'random?';
const LIMIT = 1;
const RATING = 'pg';


function getGif() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://" + BASE_URL + ENDPOINT + "&api_key=" + PUBLIC_KEY, false);
  xhr.send();
  var myArr = JSON.parse(xhr.responseText);
  console.log(myArr);
  var gifUrl = myArr.data.images.original.url
  var img = new Image();
  img.src = gifUrl;
  document.body.appendChild(img);
}
