
	var currentTimeClock = new Date();
	var hoursClock = currentTimeClock.getHours();
	var minutesClock = currentTimeClock.getMinutes();
    var clockIsActiveClock = false;

	if (minutesClock < 10){
	minutes = "0" + minutesClock}
	if (hoursClock > 12){
		hoursClock = hoursClock - 12;
	}



    // Time override
    //var hours = 5
    //var minutes = 45
    // the line below will need to be removed
	//confirm(hours+":"+minutes)
    

    var oneClock = 0;
    var one2Clock = 0;
    var twoClock = 0;
    var threeClock = 0;
    var fiveClock = 0;
    
    clockChangeClock();
    function clockChangeClock(){

        currentTimeClock = new Date();
        hoursClock = currentTimeClock.getHours();
        minutesClock = currentTimeClock.getMinutes();

        if (minutesClock < 10){
        minutes = "0" + minutesClock}
         if (hoursClock > 12){
        hoursClock = hoursClock - 12;
        }

            var oneClock = 0;
            var one2Clock = 0;
            var twoClock = 0;
            var threeClock = 0;
            var fiveClock = 0;

        if (hoursClock === 1){
        	var oneClock = 1;
        }
        if (hoursClock === 2){
        	var twoClock = 1;
        }
        if (hoursClock === 3){
        	var threeClock = 1;
        }
        if (hoursClock === 4){
        	var threeClock = 1;
        	var one2Clock = 1;
        }
        if (hoursClock === 5){
        	var fiveClock = 1;
        }
        if (hoursClock === 6){
        	var threeClock = 1;
        	var twoClock = 1;
        	var one2Clock = 1;
        }
        if (hoursClock === 7){
        	var oneClock = 1;
        	var fiveClock = 1;
        	var one2Clock = 1;
        }
        if (hoursClock === 8){
        	var threeClock = 1;
        	var fiveClock = 1;
        }
        if (hoursClock === 9){
        	var oneClock = 1;
        	var one2Clock = 1;
            var twoClock = 1;
            var fiveClock = 1;
        }
        if (hoursClock === 10){
        	var twoClock = 1;
        	var threeClock = 1;
        	var fiveClock = 1;
        }
        if (hoursClock === 11){
        	var oneClock = 1;
        	var twoClock = 1;
        	var threeClock = 1;
        	var fiveClock = 1;
        }
        if (hoursClock === 12){
        	var oneClock = 1;
        	var one2Clock = 1;
        	var twoClock = 1;
        	var threeClock = 1;
        	var fiveClock = 1;
        }







        


        if (minutesClock >= 5 && minutesClock < 10){
        	var oneClock = oneClock + 2;
        }
        if (minutesClock >= 10 && minutesClock < 15){
        	var twoClock = twoClock + 2;
        }
        if (minutesClock >= 15 && minutesClock < 20){
        	var twoClock = twoClock + 2;
        	var one2Clock = one2Clock + 2;
        }
        if (minutesClock >= 20 && minutesClock < 25){
        	var oneClock = oneClock + 2;
        	var threeClock = threeClock + 2;
        }
        if (minutesClock >= 25 && minutesClock < 30){
        	var fiveClock = fiveClock + 2;
        }
        if (minutesClock >= 30 && minutesClock < 35){
        	var threeClock = threeClock + 2;
        	var twoClock = twoClock + 2;
        	var oneClock = oneClock + 2;
        }
        if (minutesClock >= 35 && minutesClock < 40){
        	var fiveClock = fiveClock + 2;
        	var oneClock = oneClock + 2;
        	var one2Clock = one2Clock + 2;
        }
        if (minutesClock >= 40 && minutesClock < 45){
        	var fiveClock = fiveClock + 2;
        	var threeClock = threeClock + 2;
        }		
        if (minutesClock >= 45 && minutesClock < 50){
        	var fiveClock = fiveClock + 2;
        	var threeClock = threeClock + 2;
        	var oneClock = oneClock + 2;
        }
        if (minutesClock >= 50 && minutesClock < 55){
        	var twoClock = twoClock + 2;
        	var fiveClock = fiveClock + 2;
        	var threeClock = threeClock + 2;
        }
        if (minutesClock >= 55 && minutesClock < 60){
        	var oneClock = oneClock + 2;
        	var twoClock = twoClock +2;
        	var threeClock = threeClock + 2;
        	var fiveClock = fiveClock + 2;
        }

       



        if (oneClock=== 1){
        	document.getElementById("oneClock").style.background = "red";
        }
        if (oneClock === 2){
        	document.getElementById("oneClock").style.background = "blue";
        }
        if (oneClock === 3){
            document.getElementById("oneClock").style.background = "purple";
        }


        if (one2Clock === 1){
            document.getElementById("one2Clock").style.background = "red";
        }
        if (one2Clock=== 2){
            document.getElementById("one2Clock").style.background = "blue";
        }
        if (one2Clock === 3){
            document.getElementById("one2Clock").style.background = "purple";
        }

        if (twoClock === 1){
            document.getElementById("twoClock").style.background = "red";
        }
        if (twoClock === 2){
            document.getElementById("twoClock").style.background = "blue";
        }
        if (twoClock === 3){
            document.getElementById("twoClock").style.background = "purple";
        }

        if (threeClock === 1){
            document.getElementById("threeClock").style.background = "red";
        }
        if (threeClock === 2){
            document.getElementById("threeClock").style.background = "blue";
        }
        if (threeClock === 3){
            document.getElementById("threeClock").style.background = "purple";
        }

        if (fiveClock === 1){
            document.getElementById("fiveClock").style.background = "red";
        }
        if (fiveClock === 2){
            document.getElementById("fiveClock").style.background = "blue";
        }
        if (fiveClock === 3){
            document.getElementById("fiveClock").style.background = "purple";
        }


        if (oneClock === 0){
            var random = Math.random();
            if (random < .33){
                document.getElementById("oneClock").style.background = "orange";
            }
            if (random > .67){
                document.getElementById("oneClock").style.background = "yellow";
            }
            if (random >.33 && random <.67){
                document.getElementById("oneClock").style.background = "green";
            }
        }

        if (one2Clock === 0){
            var random = Math.random();
            if (random < .33){
                document.getElementById("one2Clock").style.background = "orange";
            }
            if (random > .67){
                document.getElementById("one2Clock").style.background = "yellow";
            }
            if (random >.33 && random <.67){
                document.getElementById("one2Clock").style.background = "green";
            }
        }
        

        if (twoClock === 0){
            var random = Math.random();
            if (random < .33){
                document.getElementById("twoClock").style.background = "orange";
            }
            if (random > .67){
                document.getElementById("twoClock").style.background = "yellow";
            }
            if (random >.33 && random <.67){
                document.getElementById("twoClock").style.background = "green";
            }
        }
        

        if (threeClock === 0){
            var random = Math.random();
            if (random < .33){
                document.getElementById("threeClock").style.background = "orange";
            }
            if (random > .67){
                document.getElementById("threeClock").style.background = "yellow";
            }
            if (random >.33 && random <.67){
                document.getElementById("threeClock").style.background = "green";
            }
        }
        

        if (fiveClock === 0){
            var random = Math.random();
            if (random < .33){
           document.getElementById("fiveClock").style.background = "orange";
            }
            if (random > .67){
                document.getElementById("fiveClock").style.background = "yellow";
            }
            if (random >.33 && random <.67){
                document.getElementById("fiveClock").style.background = "green";
            }
        }
    }
    
function clockOffClock(){
    clockIsActiveClock=false;
    console.log("Clock is now off");
}
function clockOnClock(){
    clockIsActiveClock=true;
    console.log("Clock is now on");
}
    
    
 function autoRefreshHowTo(){
    if(clockIsActiveClock){
        clockChangeClock();
    }
}
 
 //setInterval('autoRefreshHowTo()', 30000); // this will reload page after every 30 secounds; Method I
    setInterval('autoRefreshHowTo()', 5000);