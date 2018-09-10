var wins = 0;
var G_remain = 10;
var secret = document.getElementById("mystery");
var G_array = [];
var Guesses = [];
var Guesseses = [];
var Guessed = [];
var Guess ='';
var guessDiv = document.getElementById("G_array");
var words = [
    ['n', 'a', 'r','u', 't', 'o'],
    ['h', 'i', 'n','a', 't', 'a'],
    ['m', 'i', 'd','o', 'r', 'i', 'y', 'a'],
    ['a', 'l', 'l','m', 'i', 'g', 'h', 't'],
    ['a', 's', 't','a'],
    ['r', 'e', 'm'],
    ['r', 'a', 'm'],
];
var word = [];
var gWord = [];
var images = [
    '<img src="assets/images/hangman0.png" alt="start"></img>',
    '<img src="assets/images/hangman1.png" alt="start"></img>',
    '<img src="assets/images/hangman2.png" alt="start"></img>',
    '<img src="assets/images/hangman3.png" alt="start"></img>',
    '<img src="assets/images/hangman4.png" alt="start"></img>',
    '<img src="assets/images/hangman5.png" alt="start"></img>',
    '<img src="assets/images/hangman6.png" alt="start"></img>',
    '<img src="assets/images/hangman7.png" alt="start"></img>',
    '<img src="assets/images/hangman8.png" alt="start"></img>',
    '<img src="assets/images/hangman9.png" alt="start"></img>',
    '<img src="assets/images/hangman10.png" alt="start"></img>',
];
var photos = document.getElementById("photos");
// end global varriables 
window.onload = function () {
    mystery();

};

// keypress saves guesses and guessed if guess isn't already in guessed, refreshes guessed to html
// doesn't break with caps lock anymore 
document.onkeyup = function() {
    var guess = event.key;
    Guesses.push(guess);
    Guess = guess.toLowerCase();
    check();
    updating();
    compare();
    };
function check ()
// this fixed the duplicate letter issue with guessing a letter thats correct but has 2 in the word
{ if (gWord.includes(Guess)) {
console.log("you've already guessed this");
} else if (word.includes(Guess))    {
        for (var i = 0; i < word.length; i++) {
            if(word[i] == Guess)  {
                gWord.push(Guess);
                if (gWord.length == word.length) {
                    winning();
                }
            } 
        } 
    }  else {
            countdown();
            if(Guessed.length == 0) {
                Guessed.push(Guess);
            } else if (Guessed.includes(Guess)) {
            } else {
                Guessed.push(Guess);
            }
        }
    
}

function updating() {
    //works - populates incorrect guesses to the DOM
    guessDiv.textContent = '';
    for (var x = 0; x < Guessed.length; x++) {
        var div = document.createElement('p');
        div.textContent = Guessed[x] + ' - ';
        guessDiv.appendChild(div);
    }
};

function compare (){
    //works this populates successfull guesses to DOM
    for (var i = 0; i < 10; i++) {
        if (word[i] == Guess) {
            G_array[i].textContent = Guess;
        }
    }
};

function mystery () {
    // works - selects the mystery word and creates the guess areas for appropriate length & starts countdown
    var rando = Math.floor(Math.random()*5);
    word = words[rando];
    console.log(word);
    G_remain = 10;
    gWord = [];
    G_array = [];
    Guesses = [];
    Guesseses = [];
    Guessed = [];
    hang();
    document.getElementById("G_remain").textContent = G_remain;
    for (var i = 0; i < word.length; i++) {
        var letters = document.createElement("span");
        letters.setAttribute("id","l"+i);
        letters.textContent = ' - ';
        secret.appendChild(letters);
        G_array.push(document.getElementById("l"+i));
    }
};

function countdown () {
    //works - finally got countdown to only trigger on incorrect answers and no repeats
    if(Guesseses.length == 0) {
        Guesseses.push(Guess);
        G_remain--;
        document.getElementById("G_remain").textContent = G_remain;
        hang();
        losing();

    } else if (Guesseses.includes(Guess)) {
    } else {
        Guesseses.push(Guess);
        G_remain--;
        document.getElementById("G_remain").textContent = G_remain;
        hang();
        losing();
    }

    // G_remain--;
    // document.getElementById("G_remain").textContent = G_remain;
    // losing();
    // works - updates guesses remaining and populates to page, this only runs if guess is wrong from above call in keypress
};

function winning() {
    setTimeout(function(){
        wins++;
        document.getElementById("wins").textContent = wins;
        secret.innerHTML =   "<h1>"+ secret.innerHTML.toUpperCase() + "<div>YOU'VE GUESSED IT<div>" + "</h1>";
        console.log(G_array);
    }, 100);
    setTimeout(function() {
        secret.innerHTML = "";
        guessDiv.innerHTML ="";
        mystery();
        end();
        console.log(G_array);
    }, 1500);
};

function losing () {
    if (G_remain <= 0) {
        setTimeout(function() {
        document.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Loser</title><link rel="stylesheet" type="text/css" href="assets/css/style.css"></head><body><div class="container"><div class="row"><div class="col"><h1> SORRY BUT YOUVE LOST </h1><img src="assets/images/hangman0.png" alt="start"></img></div></div></div>');
        },500);
        setTimeout(function() {
            document.location.reload(true);
        }, 5000);
    }
};

function end () {
    if (wins == words.length) {
        document.write('<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><title>Winner Winner Chickn Dinner</title><link rel="stylesheet" type="text/css" href="assets/css/style.css"></head><body><div class="container"><div class="row"><div class="col"><h1> YOUVE WON IT ALL!!!!!!</h1><h2>Now go watch some anime</h2></div></div></div>');
        window.open("https://vrv.co/gopremium?utm_source=paid_vrv&utm_medium=google_sem&utm_campaign=brand&gclid=Cj0KCQjwidPcBRCGARIsALM--ePdyvfxeUVOx_DI77L8EVOx-ScIokgnd6qaFMhBe7tlupODrMASKNwaAsknEALw_wcB", '_blank')
        setTimeout(function() {
        document.location.reload(true);
        }, 5000); 
}
};
function hang () {
    photos.innerHTML = images[G_remain];
};
