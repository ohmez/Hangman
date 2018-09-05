var wins = 0;
var G_remain = 15;
var G_array = [1,2,3,4,5];
var Guesses = [];
var Guessed = [];
var Guess ='';

console.log('Wins '+ wins);
console.log('Guesses remaining ' + G_remain);
console.log('Gusses letter positions ' + G_array);
console.log('inner html var ' + Guessed);
// event saves every key press into variable guesses and then pushes that to the innerHTML
document.onkeyup = function() {
    var guess = event.key;
    Guesses.push(guess);
    Guess = guess;
    console.log(Guess);
    guessing();
};

function guessing() {
    for (var j = 0; j < Guesses.length; j++) {
            if (Guess == Guesses[j]) {
            console.log(Guess + ' compared to ' + Guesses[j]);
            console.log(Guesses);
            }
    }
}
/*
        document.getElementById("G_array").innerHTML = Guesses;
        Guessed = document.getElementById("G_array").innerHTML;
*/



/*  all of this below is an example to help guide how to interact with the document and events */

/*
 // vowelChecker will grab the first letter (character)...
        var firstChar = x.toLowerCase().charAt(0);

 var playerChoice = document.getElementById("playerChoice");
 var computerChoices = ["r", "p", "s"];
 var computerWins = 0;
 var ties = 0;
 var computerChoice = document.getElementById("computerChoice");



console.log(ties +1);
console.log(computerChoice);
console.log(playerChoice);

    document.onkeyup = function(event) {
        playerChoice.textContent = event.key;
        computerChoice.textContent = (computerChoices[Math.floor(Math.random() * computerChoices.length)]);
        if (playerChoice.innerText === computerChoice.innerText) {
            ties++;
            console.log(ties);
        };
    };
*/
