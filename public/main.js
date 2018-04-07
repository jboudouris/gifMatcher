const PUBLIC_KEY = '6GcvQNz3vsFlJgGAcYc7Y4E6RRoylnTH';
const BASE_URL = 'api.giphy.com/v1/gifs/';
const ENDPOINT = 'search?';
const LIMIT = 1;
const RATING = 'pg';


function getGifs() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://" + BASE_URL + ENDPOINT + "&api_key=" + PUBLIC_KEY + "&q=" + "funny", false);
  xhr.send();
  var myArr = JSON.parse(xhr.responseText);
  for (var i = 0; i < myArr.data.length; i++) {
    var gifUrl = myArr.data[i].embed_url

    $('#btn').on('click', function() {
        var img = $('<img />', {src : gifUrl + $('#imagename').val() +'.png'});
        document.write(img);
    });
  }
}
