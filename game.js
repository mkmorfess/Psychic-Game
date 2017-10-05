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

var slice1 = computerChoices.slice(0,13);
var slice2 = computerChoices.slice(14,26);


//created to different functions that do 2 different things when using the button 

function firstHalf() {

	document.getElementById("myBtn").onclick = function fun() {

		var targetDiv = document.querySelector("#guesses");
		var hint1 = document.createElement("div")
		hint1.innerHTML = "The answer is between the letters A and M"
		targetDiv.appendChild(hint1)

	}
}

function secondHalf() {

	document.getElementById("myBtn").onclick = function fun1() {

		alert("The answer is between the letters N and Z")
	}
}


//this allows for on pressing any key to relate it to the random computer choice chosen	


document.onkeyup = function(event) {

	playerGuess = event.key



	guessesSoFar.push(String.fromCharCode(event.keyCode).toLowerCase());


//if statement allows playerguess to relate to computerchoice

if (playerChoices.includes(playerGuess)) {

	if (playerGuess === computerRandom) {
		alert("You guessed correctly!");
		wins++;
		resetGame();
		console.log(guessesSoFar);
		console.log(guesses);

	}

	else if ((playerGuess != computerRandom) && (guesses > 1)) {
		
		guesses--;
		console.log(guessesSoFar)
		console.log(guesses)
		document.querySelector('#guessesSoFar').innerHTML = "<p> Guesses So Far: " + guessesSoFar.join(", ") + "</p>"
		document.querySelector("#guesses").innerHTML = "<p> Guesses Left: " + guesses + "</p>"


		if (guesses < 5) {
			console.log("Would you like a hint??");
			var targetDiv = document.querySelector("#guesses");
			var hint = document.createElement("button");
			hint.innerHTML = ("Press the button for a hint!<br>");
			hint.setAttribute("class", "btn btn-primary")
			hint.setAttribute("id", "myBtn")
			targetDiv.appendChild(hint);


			if (slice1.includes(computerRandom)) {

				firstHalf()
			} else {

				secondHalf()
			}
		}

	}


	else {
		alert("You Lost!! The answer was " + computerRandom);
		guesses--;
		losses++
		resetGame()
		console.log(guessesSoFar)
		console.log(guesses)

	}

	var gameUpdate =
	"<p> Wins: " + wins + "</p>" +
	"<p> Losses: " + losses + "</p>"


	document.querySelector("#game").innerHTML = gameUpdate
}else {
	alert("I said.. choose a letter!")
}

}






