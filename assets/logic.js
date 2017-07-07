

console.log("test");
var wordInventory = ["yes", "no", "maybe", "sword", "wide", "genius", "celestial", "david","chris",
"ritter","natalie", "albert", "brandi", "wayne", "carlos", "diane", "renee", "ivonne", "marco", "lana", "veronica",
"adriana", "terry", "john", "alex", "saul", "carolina", "alejandra"];
var guess = [];
var answer = wordInventory[Math.floor(Math.random()*wordInventory.length)];
var guessesLeft = 10;
var losses = 0;
var wins = 0;
var guessHistory = [];
//Used to display underscores
for (var i=0; i <= (answer.length -1); i++ ){
	guess.push("_");
}

function resetGame(){
  answer = "";
  guessHistory = [];
  guess = [];
  answer = wordInventory[Math.floor(Math.random()*wordInventory.length)];
  guessesLeft = 10;
  for ( i=0; i <= (answer.length -1); i++){
    guess.push("_");
  }
}


	document.addEventListener("keyup", function(event) {
		var guessedLetter = event.key;
		var updatedGuess = [];

		//checks to see if input is in the answer or previously guessed
		//if input is not in the answer AND it's not previously guessed subtract guess
		if ( answer.indexOf(event.key) < 0 && guessHistory.indexOf(event.key) < 0){
			guessesLeft--;
		}
		// Puts the input into the array guessHistory
		guessHistory.push(event.key);
		document.getElementById("guessholder").innerHTML = guessHistory;

		// if the guessed letter is in the answer execute the following
		if (answer.indexOf(guessedLetter) >= 0) {
			//Loop and update variables if letter is correct
			for( var i=0; i <= (answer.length-1); i++){
				if ( guessedLetter === answer[i]){
					updatedGuess.push(answer[i]);
				} else {
					updatedGuess.push(guess[i]);
				}
			}
			guess = updatedGuess;
		}

		//a loss occurs	add 1 to losses and reset the game and display answer
		if (guessesLeft == 0){
			document.getElementById("losses").innerHTML = ++losses;
			document.getElementById("revealLastAnswer").innerHTML = answer;
      resetGame();
			}

    //A win occurs add 1 to wins and reset the game
		if (guess.join("") === answer){
			document.getElementById("win").innerHTML = ++wins;
			document.getElementById("revealLastAnswer").innerHTML = answer;
      resetGame();
		}

		document.getElementById("word").innerHTML = guess.join(" ");
		document.getElementById("guessesLeft").innerHTML = guessesLeft;
	});
	//document.getElementById("word").innerHTML = guess.join(" ");
