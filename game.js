var selectedHoursGame;
var selectedMinutesGame;

var correctGame=0;
var incorrectGame=0;
var inARowGame=0;
var recordInARowGame=0;

totalRecordInARowStatsGame = localStorage.getItem('totalRecordInARowStatsGame');

function submitGame(){
	if(hoursGame == selectedHoursGame && minutesGame == selectedMinutesGame){
		correctFunctionGame();
	}else{
		incorrectFunctionGame();
	}
}
function nextGame(){
	clearHoursGame();
	clearMinutesGame();
	nextClockGame();
}
function correctFunctionGame(){
	correctGame++;
	inARowGame++;
	if(inARowGame > recordInARowGame){
		recordInARowGame= inARowGame;
	}
	if(recordInARowGame > totalRecordInARowStatsGame){
		localStorage.setItem('totalRecordInARowStatsGame', recordInARowGame);
	}
	popoutCorrectGame();
	plusOneStatsGame('totalCorrectStatsGame');
}
function incorrectFunctionGame(){
	incorrectGame++;
	inARowGame=0;
	popoutIncorrectGame();
	plusOneStatsGame('totalIncorrectStatsGame');
}

function highlightHourGame(element, hoursIs){
	element.style.background='red';
	selectedHoursGame = hoursIs;
	console.log(selectedHoursGame);
}
function highlightMinuteGame(element, minutesIs){
	element.style.background='blue';
	selectedMinutesGame = minutesIs;
	console.log(selectedMinutesGame);
}


function clearHoursGame(){
	selectedHoursGame = 0;
	for(i = 0; i < 12; i++){
		//console.log("right"+i);
		document.getElementById("rightGame"+i).style.background='rgba(255,90,90,.5)';
	}
}
function clearMinutesGame(){
	selectedMinutesGame = 0;
	for(i = 0; i < 12; i++){
		//console.log("bottom"+i);
		document.getElementById("bottomGame"+i).style.background='rgba(90,90,255,.5';
	}
}
