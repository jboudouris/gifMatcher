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

var choosenCards = new Array();

var player0score = 0;
var player1score = 0;
var player2score = 0;
var player3score = 0;

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
  xhr.open("GET", "https://" + BASE_URL + ENDPOINT + "&api_key=" + PUBLIC_KEY +"&tag=&rating=PG", false);
  xhr.send();
  var myArr = JSON.parse(xhr.responseText);
  var gifUrl = myArr.data.images.original.url
  return gifUrl;
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function randPhrase() {
    var index = getRandomInt(phrases.length)
    document.getElementById('currentPhrase').innerHTML = phrases[index];
    return phrases[index];
}

var clicks = 0;

function makeSelection(id) {
  clicks++;
  if (curPlayer == 0) {
    choosenCards[0] = document.getElementById(id).src
  } else if (curPlayer == 1) {
    choosenCards[1] = document.getElementById(id).src
  } else if (curPlayer == 2) {
    choosenCards[2] = document.getElementById(id).src
  } else if (curPlayer == 3) {
    choosenCards[3] = document.getElementById(id).src
  }
  findSelected(document.getElementById(id).src);
  if (clicks == 3) {
    clicks = 0;
    promptJudge()
  }
  var next = 0;
  if (curPlayer == 0) {
    next = player1cards;
  } else if (curPlayer == 1) {
    next = player2cards;
  } else if (curPlayer == 2) {
    next = player3cards;
  } else if (curPlayer == 3) {
    next = player0cards;
  }

  if(curPlayer+1 == curJudge)
    curPlayer=curPlayer+2;
  else
    curPlayer++;
  if(curPlayer>3)
    curPlayer=0;

  nextPlayer(next);
}

function findSelected(selectedURL) {
  if (curPlayer == 0) {
    for (var i = 0; i < player0cards.length; i++) {
      if (player0cards[i] == selectedURL) {
        player0cards[i] = getGif();
      }
    }
  } else if (curPlayer == 1) {
    for (var i = 0; i < player1cards.length; i++) {
      if (player1cards[i] == selectedURL) {
        player1cards[i] = getGif();
      }
    }
  } else if (curPlayer == 2) {
    for (var i = 0; i < player2cards.length; i++) {
      if (player2cards[i] == selectedURL) {
        player2cards[i] = getGif();
      }
    }
  } else if (curPlayer == 3) {
    for (var i = 0; i < player3cards.length; i++) {
      if (player3cards[i] == selectedURL) {
        player3cards[i] = getGif();
      }
    }
  }
}

function switchCards(nextPlayer) {
  document.getElementById("cards1").src = nextPlayer[0]
  document.getElementById("cards2").src = nextPlayer[1]
  document.getElementById("cards3").src = nextPlayer[2]
  document.getElementById("cards4").src = nextPlayer[3]
  document.getElementById("cards5").src = nextPlayer[4]
}

function nextPlayer(playerNumber) {
  /*if(playerNumber==curJudge)
    curPlayer=curPlayer+2;
  else
    curPlayer++;
  var player="player"+curPlayer+"cards";*/
  switchCards(playerNumber)
}

function promptJudge() {
  var k=1;
  for(var i=0;i<4;i++){
    if(i==curJudge){
      continue;
    }
    var ch='choice'+k;
    console.log(i);
    console.log(ch);
    document.getElementById(ch).src = choosenCards[i];
    k++;
  }
  curJudge++;
  if(curJudge>3)
    curJudge=1;
}

function resetChoosen() {
  var k=1;
  for (var i = 0; i < choosenCards.length - 1; i++) {
    choosenCards[i] = "images/loading.png";
    var ch="choice"+k;
    console.log(ch);
    document.getElementById(ch).src = choosenCards[i];
    k++;
  }
}

function cardChoosen(selected) {
  if (selected == "choice1") {
    player1score++;
  } else if (selected == "choice2") {
    player2score++;
  } else if (selected == "choice3") {
    player3score++;
  }
    resetChoosen()
    randPhrase()
  }



  function displayPlayer() {
  if (curPlayer == 0) {
    document.getElementById("player").innerHTML = "Name: Player 1"
  } else if (curPlayer == 1) {
    document.getElementById("player").innerHTML = "Name: Player 2"
  } else if (curPlayer == 2) {
    document.getElementById("player").innerHTML = "Name: Player 3"
  } else if (curPlayer == 3) {
    document.getElementById("player").innerHTML = "Name: Player 4"
  }
}

function displayJudge() {
  if (curJudge == 0) {
    document.getElementById("judge").innerHTML = "current judge is player 1"
  } else if (curJudge == 1) {
    document.getElementById("judge").innerHTML = "current judge is player 2"
  } else if (curJudge == 2) {
    document.getElementById("judge").innerHTML = "current judge is player 3"
  } else if (curJudge == 3) {
    document.getElementById("judge").innerHTML = "current judge is player 4"
  }
}
