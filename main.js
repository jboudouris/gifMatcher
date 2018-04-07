const PUBLIC_KEY = '6GcvQNz3vsFlJgGAcYc7Y4E6RRoylnTH';
const BASE_URL = 'api.giphy.com/v1/gifs/';
const ENDPOINT = 'random?';
const LIMIT = 1;
const RATING = 'pg';


var phrases = ["me after a long day of ruining my life", "when you in the shower and the lights flicker", "when you pay the minimum on your credit card", "me after launching at my own jokes", "when you wait for the waiter you become the waiter", "when someone makes you take out your earphones to say something pointless", "when your girls says we need to talk & every single thing you’ve done since you’ve been together crosses your mind", "when you’re eating fistfuls of cheese at 3am and someone turns on the lights", "TFW when you find out Wisconsinites are made of 70% cheese", "when you learn C++ why not A++", "How’s your degree going?", "when you delete a block of code you thought was useless", "Me sneaking snacks into the theatre", "when you realise you slept through all the alarms for your 7am exam", "Me reading your message previews from the pull down bar on my phone and not answering for the next 6 hours", "when your mom says stop playing Minecraft and you say NO", "when you drop your phone but the screen doesn’t crack", "me on FaceTime ignoring everything the person is saying and looking at myself", "me trying to sleep at a decent time every night", "5th graders when they jump up and touch the top of the doorway", "when your friend in the backseat has AUX privileges and they start playing Nickelback", "when someone tries to call me instead of texting", "my face when I type LMFAOOO", "when it’s december 31st and someone says see you next year", "when you wake up at 9am on a weekend", "when you match with someone on tinder as soon as you download it"]

var curPlayer = 0;
var curJudge = 1;

var player0cards = new Array();
var player1cards = new Array();
var player2cards = new Array();
var player3cards = new Array();

function initializeGame() {
  for (var j = 0; j < 5; j++) {
    player0cards[j] = getGif()
  }
  for (var j = 0; j < 5; j++) {
    player1cards[j] = getGif()
  }
  for (var j = 0; j < 5; j++) {
    player2cards[j] = getGif()
  }
  for (var j = 0; j < 5; j++) {
    player3cards[j] = getGif()
  }
  switchCards(player0cards);
}

function getGif() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://" + BASE_URL + ENDPOINT + "&api_key=" + PUBLIC_KEY +"&tag=&rating=G", false);
  xhr.send();
  var myArr = JSON.parse(xhr.responseText);
  var gifUrl = myArr.data.images.original.url
  return gifUrl;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function randPhrase() {
    var 
}

function clearBox(id) {
  getGif(id);
}

function makeSelection(id, destID) {
  console.log( document.getElementById(id).src);
  document.getElementById(destID).src = document.getElementById(id).src
  clearBox(id);
}

function switchCards(nextPlayer) {
  document.getElementById("cards1").src = nextPlayer[0]
  document.getElementById("cards2").src = nextPlayer[1]
  document.getElementById("cards3").src = nextPlayer[2]
  document.getElementById("cards4").src = nextPlayer[3]
  document.getElementById("cards5").src = nextPlayer[4]
}

function nextPlayer(playerNumber) {
  switchCards(playerNumber)
}
