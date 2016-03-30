
	var hoursGame = Math.ceil(Math.random()*12);
	var minutesGame = (Math.ceil(Math.random()*12))*5;

	if (minutesGame < 10){
	minutesGame = "0" + minutesGame
    }
    if (minutesGame == 60){
        minutesGame = 0;
    }
	if (hoursGame > 12){
		hoursGame = hoursGame - 12
	}
    function nextClockGame(){
        hoursGame = Math.ceil(Math.random()*12);
        minutesGame = (Math.ceil(Math.random()*12))*5;
        if (minutesGame < 10){
        minutesGame = "0" + minutesGame
        }
        if (minutesGame == 60){
            minutesGame = 0;
        }
        if (hoursGame > 12){
            hoursGame = hoursGame - 12
        }
        addColorsGame();
    }



    // Time override
    //var hours = 5
    //var minutes = 45
    // the line below will need to be removed
	//confirm(hours+":"+minutes)
    function addColorsGame(){

        var oneGame = 0
        var one2Game = 0
        var twoGame = 0
        var threeGame = 0
        var fiveGame = 0

        if (hoursGame === 1){
        	var oneGame = 1
        }
        if (hoursGame === 2){
        	var twoGame = 1
        }
        if (hoursGame === 3){
        	var threeGame = 1
        }
        if (hoursGame === 4){
        	var threeGame = 1
        	var one2Game = 1
        }
        if (hoursGame === 5){
        	var fiveGame = 1
        }
        if (hoursGame === 6){
        	var threeGame = 1
        	var twoGame = 1 
        	var one2Game = 1 
        }
        if (hoursGame === 7){
        	var oneGame = 1
        	var fiveGame = 1
        	var one2Game = 1
        }
        if (hoursGame === 8){
        	var threeGame = 1
        	var fiveGame = 1
        }
        if (hoursGame === 9){
        	var oneGame = 1
        	var one2Game = 1
            var twoGame = 1
            var fiveGame = 1
        }
        if (hoursGame === 10){
        	var twoGame = 1
        	var threeGame = 1
        	var fiveGame = 1
        }
        if (hoursGame === 11){
        	var oneGame = 1
        	var twoGame = 1
        	var threeGame = 1
        	var fiveGame = 1
        }
        if (hoursGame === 12){
        	var oneGame = 1
        	var one2Game = 1
        	var twoGame = 1
        	var threeGame = 1
        	var fiveGame = 1
        }







        


        if (minutesGame == 5){
        	var oneGame = oneGame + 2
        }
        if (minutesGame == 10 ){
        	var twoGame = twoGame + 2
        }
        if (minutesGame == 15 ){
        	var twoGame = twoGame + 2
        	var one2Game = one2Game + 2
        }
        if (minutesGame == 20 ){
        	var oneGame = oneGame + 2
        	var threeGame = threeGame + 2
        }
        if (minutesGame == 25 ){
        	var fiveGame = fiveGame + 2
        }
        if (minutesGame == 30 ){
        	var threeGame = threeGame + 2
        	var twoGame = twoGame + 2
        	var oneGame = oneGame + 2
        }
        if (minutesGame == 35 ){
        	var fiveGame = fiveGame + 2
        	var oneGame = oneGame + 2
        	var one2Game = one2Game + 2
        }
        if (minutesGame == 40 ){
        	var fiveGame = fiveGame + 2
        	var threeGame = threeGame + 2
        }		
        if (minutesGame == 45 ){
        	var fiveGame = fiveGame + 2
        	var threeGame = threeGame + 2
        	var oneGame = oneGame + 2
        }
        if (minutesGame == 50 ){
        	var twoGame = twoGame + 2
        	var fiveGame = fiveGame + 2
        	var threeGame = threeGame + 2
        }
        if (minutesGame == 55 ){
        	var oneGame = oneGame + 2
        	var twoGame = twoGame +2
        	var threeGame = threeGame + 2
        	var fiveGame = fiveGame + 2
        }

       



        if (oneGame === 1){
        	document.getElementById("oneGame").style.background = "red";
        }
        if (oneGame === 2){
        	document.getElementById("oneGame").style.background = "blue";
        }
        if (oneGame === 3){
            document.getElementById("oneGame").style.background = "purple";
        }


        if (one2Game === 1){
            document.getElementById("one2Game").style.background = "red";
        }
        if (one2Game === 2){
            document.getElementById("one2Game").style.background = "blue";
        }
        if (one2Game === 3){
            document.getElementById("one2Game").style.background = "purple";
        }

        if (twoGame === 1){
            document.getElementById("twoGame").style.background = "red";
        }
        if (twoGame === 2){
            document.getElementById("twoGame").style.background = "blue";
        }
        if (twoGame === 3){
            document.getElementById("twoGame").style.background = "purple";
        }

        if (threeGame === 1){
            document.getElementById("threeGame").style.background = "red";
        }
        if (threeGame === 2){
            document.getElementById("threeGame").style.background = "blue";
        }
        if (threeGame === 3){
            document.getElementById("threeGame").style.background = "purple";
        }

        if (fiveGame === 1){
            document.getElementById("fiveGame").style.background = "red";
        }
        if (fiveGame === 2){
            document.getElementById("fiveGame").style.background = "blue";
        }
        if (fiveGame === 3){
            document.getElementById("fiveGame").style.background = "purple";
        }






        console.log("one is " +oneGame)
        console.log("one2 is " +one2Game)
        console.log("two is " +twoGame)
        console.log("three is " +threeGame)
        console.log("five is " +fiveGame)

        if (oneGame === 0){
            var random = Math.random();
            if (random < .33){
                document.getElementById("oneGame").style.background = "orange";
            }
            if (random > .67){
                document.getElementById("oneGame").style.background = "yellow";
            }
            if (random >.33 && random <.67){
                document.getElementById("oneGame").style.background = "green";
            }
        }

        if (one2Game === 0){
            var random = Math.random();
            if (random < .33){
                document.getElementById("one2Game").style.background = "orange";
            }
            if (random > .67){
                document.getElementById("one2Game").style.background = "yellow";
            }
            if (random >.33 && random <.67){
                document.getElementById("one2Game").style.background = "green";
            }
        }
        

        if (twoGame === 0){
            var random = Math.random();
            if (random < .33){
                document.getElementById("twoGame").style.background = "orange";
            }
            if (random > .67){
                document.getElementById("twoGame").style.background = "yellow";
            }
            if (random >.33 && random <.67){
                document.getElementById("twoGame").style.background = "green";
            }
        }
        

        if (threeGame === 0){
            var random = Math.random();
            if (random < .33){
                document.getElementById("threeGame").style.background = "orange";
            }
            if (random > .67){
                document.getElementById("threeGame").style.background = "yellow";
            }
            if (random >.33 && random <.67){
                document.getElementById("threeGame").style.background = "green";
            }
        }
        

        if (fiveGame === 0){
            var random = Math.random();
            if (random < .33){
           document.getElementById("fiveGame").style.background = "orange";
            }
            if (random > .67){
                document.getElementById("fiveGame").style.background = "yellow";
            }
            if (random >.33 && random <.67){
                document.getElementById("fiveGame").style.background = "green";
            }
        }
    }
    
    
 