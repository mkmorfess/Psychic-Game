//This is the list of computer choices to guess from

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var playerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
//score of the game

var wins = 0
var losses = 0

//this variable needs to decrease by 1 if wrong guess is given. if guesses = 0,
//then losses increases. If correct guess, then wins increases and guesses reset

var guesses = 9


//this should show the specific letters the user types in. It should reset after each "round"

var guessesSoFar = []

//create a variable that produces a function to reset the number of guesses, reset the Guesses So Far to nothing, and reset the computerChoice
var resetGame = function() {
	guesses = 9
	guessesSoFar = []
	computerRandom = computerChoices[Math.floor(Math.random() * computerChoices.length)];	
	console.log(computerRandom)
}

//variable set to choose random letter from computerChoices
var computerRandom = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//This is to ensure it worked..
console.log(computerRandom)

//this allows for on pressing any key to relate it to the random computer choice chosen	

document.onkeyup = function(event) {

	playerGuess = event.key



guessesSoFar.push(String.fromCharCode(event.keyCode).toLowerCase());

//if statement allows playerguess to relate to computerchoice

//if (playerChoices === playerGuess) {
	if (playerGuess === computerRandom) {
		alert("You guessed correctly!")
		wins++
		resetGame()
		console.log(guessesSoFar)
		console.log(guesses)
	}

	else if ((playerGuess != computerRandom) && (guesses > 1)) {
		
		guesses--;
		console.log(guessesSoFar)
		console.log(guesses)
		document.querySelector('#guessesSoFar').innerHTML = "<p> Guesses So Far: " + guessesSoFar.join(", ") + "</p>"
	
	}
	else {
		alert("You Lost!!");
		guesses--;
		losses++
		resetGame()
		console.log(guessesSoFar)
		console.log(guesses)

	}
//}else {
	//alert("I said.. choose a letter!")
//}

	var gameUpdate =
	"<p> Wins: " + wins + "</p>" +
	"<p> Losses: " + losses + "</p>" +
	"<p> Guesses Left: " + guesses + "</p>"


document.querySelector("#game").innerHTML = gameUpdate
}





