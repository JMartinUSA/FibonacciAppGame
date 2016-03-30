var percentCorrectGame;
var correctIncorrectIsShowingGame = false;
function recalculatePercentGame(){
	percentCorrectGame = ((correctGame/(correctGame+incorrectGame))*100).toFixed(0)+"%";
}
function popoutCorrectGame(){
	correctIncorrectIsShowingGame = true;
	recalculatePercentGame();
	document.getElementById("correctGame").style.display="block";
	document.getElementById("transparentCoverGame").style.display="block";

	document.getElementById("inARowGame").innerHTML=inARowGame;
	document.getElementById("percentCorrectGame").innerHTML=percentCorrectGame;
}
function popoutIncorrectGame(){
	correctIncorrectIsShowingGame = true;
	recalculatePercentGame();
	document.getElementById("incorrectGame").style.display="block";
	document.getElementById("transparentCoverGame").style.display="block";

	document.getElementById("recordInARowGame").innerHTML=recordInARowGame;
	document.getElementById("percentIncorrectGame").innerHTML=percentCorrectGame;
}
function hidePopoutGame(){
	correctIncorrectIsShowingGame = false;
	document.getElementById("correctGame").style.display="none";
	document.getElementById("incorrectGame").style.display="none";
	document.getElementById("transparentCoverGame").style.display="none";
}
function nextLevelGame(){
	nextGame();
	hidePopoutGame();
}

function getKeysGame(){
	for(var i = 0, len = localStorage.length; i < len; ++i){
		console.log(localStorage.getItem(localStorage.key(i)));
	}
}