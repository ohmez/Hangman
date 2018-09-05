var wins =;












/*  all of this below is an example to help guide how to interact with the document and events */


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
