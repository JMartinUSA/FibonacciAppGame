var totalCorrectStatsGame;
var totalIncorrectStatsGame;
var totalAccuracyStatsSecondGame;
var totalRecordInARowStatsGame;

function plusOneStatsGame(Key){
	var valueGame = localStorage.getItem(Key);
	valueGame++;
	localStorage.setItem(Key, valueGame);
	console.log(valueGame);
}

function recalculateStatsGame(){
	totalCorrectStatsGame = Number(localStorage.getItem('totalCorrectStatsGame'));
	totalIncorrectStatsGame = Number(localStorage.getItem('totalIncorrectStatsGame'));
	totalRecordInARowStatsGame = localStorage.getItem('totalRecordInARowStatsGame');

	recalculatePercentGame();
}


function showStatsGame(){
	document.getElementById('statsGame').style.display="block";
	if(correctIncorrectIsShowingGame == false){
		document.getElementById('transparentCoverGame').style.display="block";
	}
	textToHtmlStatsGame();
}
function backStatsGame(){
	document.getElementById('statsGame').style.display="none";
	if(correctIncorrectIsShowingGame == false){
		document.getElementById('transparentCoverGame').style.display="none";
	}
}
function textToHtmlStatsGame(){
	recalculateStatsGame();
	document.getElementById('totalCorrectStatsGame').innerHTML=totalCorrectStatsGame;
	document.getElementById('totalIncorrectStatsGame').innerHTML=totalIncorrectStatsGame;
	document.getElementById('totalAccuracyStatsGame').innerHTML=(((totalCorrectStatsGame/(totalCorrectStatsGame+totalIncorrectStatsGame))*100)).toFixed(0)+"%";
	document.getElementById('totalRecordInARowStatsGame').innerHTML=totalRecordInARowStatsGame || 0;
	document.getElementById('correctStatsGame').innerHTML=correctGame || 0;
	document.getElementById('incorrectStatsGame').innerHTML=incorrectGame || 0;
	document.getElementById('accuracyStatsGame').innerHTML=percentCorrectGame || 0;
	document.getElementById('recordInARowStatsGame').innerHTML=recordInARowGame || 0;
}