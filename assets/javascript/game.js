

var gameWords = 
["costumes", "candycorn", "ghosts", "graveyard", "ghouls", "pumpkins", "witch", "spooky", "spiderwebs", "demons"];

var gameImages = ["assets/images/hm2.jpg", "assets/images/hm3.jpg", "assets/images/hm4.jpg", "assets/images/hm5.jpg", "assets/images/hm6.jpg", "assets/images/hm7.jpg", "assets/images/hm8.jpg", "assets/images/hm9.jpg", "assets/images/hm10.jpg", "assets/images/hm11.jpg"]

var maxTries = 10;
var guesses = document.getElementById("let-guess");
var gameIndex = [];
var wordPlayed = gameWords[Math.floor(Math.random() * gameWords.length)];
var wordLength = wordPlayed.length;
var underscores = "";
var gameStarted = false;

document.getElementById("startButt").onclick = function() {gameReset(); gameStart()};

function gameReset() {
    maxTries = 10;
    underscores = "";
    gameIndex = [];
    wordPlayed = gameWords[Math.floor(Math.random() * gameWords.length)];
    wordLength = wordPlayed.length;
    document.getElementById("currentWord").innerHTML = "";
    gameIndex = [];
    document.getElementById("let-guess").innerHTML = "";
    document.getElementById("lives").innerHTML = "10";
    document.getElementById("hangmanImg").src = "assets/images/hm1.jpg";

};

function gameStart() {
    for(i=0; i<wordPlayed.length; i++) {
        underscores = underscores + "_";
        document.getElementById("currentWord").innerHTML = underscores;
        gameStarted = true;
    };
    if (gameStarted = true) {
        document.onkeyup = function(event) {
            userGuess = event.key;
            var list = document.createElement("span");
            var listText = document.createTextNode(userGuess + ", ");
            list.appendChild(listText);
            document.getElementById("let-guess").appendChild(list);
            checkState(userGuess);
             };
            
        };
    
    };



function checkState(userGuess) {

    if (maxTries === 0) {
        document.getElementById("currentWord").innerHTML = "You lose!"
        return;
    }

    var letterGuess = 0;

    for (var k=0; k<=wordPlayed.length+1; k++) {
        guessLetter = wordPlayed[k-1];
        if (userGuess === guessLetter) {
            underscores = (underscores.substr(0,k-1) + guessLetter + underscores.substr(k,underscores.length-k));
            letterGuess = 1;
        }
    }
    document.getElementById("currentWord").innerHTML = underscores;

    if (underscores === wordPlayed) document.getElementById("currentWord").innerHTML = "You Win!";

    if (letterGuess != 1) maxTries--;
    document.getElementById("lives").innerHTML = maxTries;
    if (maxTries === 9) 
    document.getElementById("hangmanImg").src = "assets/images/hm2.jpg";
    if (maxTries === 8) 
    document.getElementById("hangmanImg").src = "assets/images/hm3.jpg";
    if (maxTries === 7) 
    document.getElementById("hangmanImg").src = "assets/images/hm4.jpg";
    if (maxTries === 6) 
    document.getElementById("hangmanImg").src = "assets/images/hm5.jpg";
    if (maxTries === 5) 
    document.getElementById("hangmanImg").src = "assets/images/hm6.jpg";
    if (maxTries === 4) 
    document.getElementById("hangmanImg").src = "assets/images/hm7.jpg";
    if (maxTries === 3) 
    document.getElementById("hangmanImg").src = "assets/images/hm8.jpg";
    if (maxTries === 2) 
    document.getElementById("hangmanImg").src = "assets/images/hm9.jpg";
    if (maxTries === 1) 
    document.getElementById("hangmanImg").src = "assets/images/hm10.jpg";
    if (maxTries === 0) 
    document.getElementById("hangmanImg").src = "assets/images/hm11.jpg";

};
