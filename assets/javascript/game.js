

var gameWords = 
["costumes", "candycorn", "ghosts", "graveyard", "ghouls", "pumpkins", "witch", "spooky", "spiderwebs", "demons"];

const maxTries = 10;
var guesses = document.getElementById("let-guess");
var gameIndex = [];
var wordPlayed = gameWords[Math.floor(Math.random() * gameWords.length)];
var wordLength = wordPlayed.length;
var underscores = "";
var gameStarted = false;

document.getElementById("startButt").onclick = function() {gameReset(); gameStart()};

function gameReset() {
    underscores = "";
    gameIndex = [];
    wordPlayed = gameWords[Math.floor(Math.random() * gameWords.length)];
    wordLength = wordPlayed.length;
    document.getElementById("currentWord").innerHTML = "Press Start to play!";
    gameIndex = [];
    document.getElementById("let-guess").innerHTML = "";
    document.getElementById("lives").innerHTML = "10";

};

function gameStart() {
    for(i=0; i<wordLength; i++) {
        underscores = underscores + "_ ";
        document.getElementById("currentWord").innerHTML = underscores;
        console.log(wordPlayed);
        gameStarted = true;
        console.log(gameStarted);
    };
    if (gameStarted = true) {
        document.onkeyup = function(event) {
            // console.log(event.key)
            userGuess = event.key;
            checkState(userGuess);
            
             };
            // if ((userGuess === wordPlayed)) {
            //     console.log("this might work");
            // }

        };
    
    };

// };

function checkState(userGuess) {
    console.log(userGuess);
    for (k=0; k<wordPlayed; k++) {
        if (userGuess === wordPlayed[k]) {
            underscores[k] = userGuess
            // underscores.push[k];
            underscores.valueOf();
        }
    }
    
};

// function checkState(userGuess) {
//     var postions = [];
//     for (var k = 0; k < underscores.length; k++) {
//         if (underscores[k] === userGuess); {
//             postions.push[k];
//         };
//     };
// }