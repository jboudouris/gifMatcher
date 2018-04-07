const PUBLIC_KEY = '6GcvQNz3vsFlJgGAcYc7Y4E6RRoylnTH';
const BASE_URL = 'api.giphy.com/v1/gifs/';
const ENDPOINT = 'random?';
const LIMIT = 1;
const RATING = 'pg';

var images = new Array();

function getGif(var myid) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://" + BASE_URL + ENDPOINT + "&api_key=" + PUBLIC_KEY +"&tag=&rating=G", false);
  xhr.send();
  var myArr = JSON.parse(xhr.responseText);
  var gifUrl = myArr.data.images.original.url
  var img = new Image();
  console.log(gifUrl);
  document.getElementById(myid).src = gifUrl;
}

function clearBox() {
  document.getElementById(myid).value = "";
}