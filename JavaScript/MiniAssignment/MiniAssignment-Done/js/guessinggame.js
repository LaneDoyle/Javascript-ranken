randomNumberrandomNumber"use strict";

const MINNUMBER		=	  1;
const MAXNUMBER		=	100;

var randomNumber 				=	  0;
var numGuesses		=	  0;
var guessedIt			=	true;

var $ = function(id) {
	return document.getElementById(id);
};

var processEntries = function()
{
	var guess = parseInt($("guess").value);

	$("guessStatus").value = "";

	if (guessedIt)
	{
		getNewNumber();
	}

	if (isNaN(guess) || (guess < MINNUMBER) || (guess > MAXNUMBER))
	{
		$("guess").nextElementSibling.firstChild.nodeValue =
		"Invalid Guess: Must be from " + MIN.toString() + " to " + MAX.toString();
		$("guess").value = "";
		$("guess").focus();
		guessedIt = false;
		return;
	}
	else
	{
		$("guess").nextElementSibling.firstChild.nodeValue = "";
		checkYourGuess(guess);
	}
};

var checkYourGuess = function(g) {
	var retVal = "";

	numGuesses++;

	if (g < randomNumber)
	{
		retVal = "Your Guess Of " + g + " Was Too Low.  Try Again";
		guessedIt = false;
	}
	else if (g > randomNumber)
	{
		retVal = "Your Guess Of " + g + " Was Too High.  Try Again";
		guessedIt = false;
	}
	else if (g === randomNumber)
	{
		retVal = "Correct Guess Of " + g + " In " + numGuesses + " guesses";
		guessedIt = true;
	}

	$("guessStatus").value = retVal;
};

var resetTheForm = function() {
	$("guess").value 			= "";
	$("guessStatus").value	= "";
	$("guess").nextElementSibling.firstChild.nodeValue = "*";
	$("guess").focus();
};

var getNewNumber = function() {
	//	Generate a new random number
	resetTheForm();
	numGuesses = 0;
	randomNumber = Math.floor(Math.random() * (MAX-MIN)) + MIN);
}

window.onload = function() {
	$("calculate").onclick = processEntries;	//	"Register" calculate button
	$("reset").onclick = resetTheForm;		//	"Register" reset button
	$("newNumber").onclick = getNewNumber;	//	"Register" new number button
	$("guess").focus();					//	Set focus to height text box
};
