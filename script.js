
/* ################### variables with HTML for dices  ######################## */
var diceWith1Dot = `<div class="dice" id="diceOf1Dot">
                <div class="diceDot" id="dot1"></div>
            </div>`
var diceWith2Dots = `<div class="dice" id="diceOf2Dots">
                <div class="diceDot" id="dice2Dot1"></div>
                <div class="diceDot" id="dice2Dot2"></div>
            </div>`

var diceWith3Dots = `<div class="dice" id="diceOf3Dots">
                <div class="diceDot" id="dice3Dot1"></div>
                <div class="diceDot" id="dice3Dot2"></div>
                <div class="diceDot" id="dice3Dot3"></div>
            </div>`
var diceWith4Dots=`<div class="dice" id="diceOf4Dots">


                <div class="top2Dots">
                    <div class="diceDot" id="dice4Dot1"></div>
                    <div class="diceDot" id="dice4Dot2"></div>
                </div>

                <div class="bottom2Dots">
                    <div class="diceDot" id="dice4Dot3"></div>
                    <div class="diceDot" id="dice4Dot4"></div>
                </div>
                
            </div>`     
        
var diceWith5Dots = `<div class="dice" id="diceOf5Dots">


                <div class="top2Dots">
                    <div class="diceDot" id="dice4Dot1"></div>
                    <div class="diceDot" id="dice4Dot2"></div>
                </div>

                <div class="diceDot" id="dice5Dot5"></div>

                <div class="bottom2Dots">
                    <div class="diceDot" id="dice4Dot3"></div>
                    <div class="diceDot" id="dice4Dot4"></div>
                </div>
                
                
            </div>`     


var diceWith6Dots = `<div class="dice" id="diceOf6Dots">


                <div class="top2Dots">
                    <div class="diceDot" id="dice6Dot1"></div>
                    <div class="diceDot" id="dice6Dot2"></div>
                </div>

                <div class="central2Dots">
                    <div class="diceDot" id="dice6Dot3"></div>
                    <div class="diceDot" id="dice6Dot4"></div>
                </div>
                

                <div class="bottom2Dots">
                    <div class="diceDot" id="dice6Dot5"></div>
                    <div class="diceDot" id="dice6Dot6"></div>
                </div>
                
                
            </div>`


/*#################### this function gets random 1 - 6 number
and updates HTML according to it
#################*/ 

function randomDiceNumber(){
    var dice1 = Math.floor(Math.random()*6 + 1);
    var dice2 = Math.floor(Math.random()*6+1);
    
    // conditions for dice 1
    if(dice1==1){
        document.querySelector("#player1Dice").innerHTML= diceWith1Dot
    }
    if(dice1==2){
        document.querySelector("#player1Dice").innerHTML=diceWith2Dots

    }
    if(dice1==3){
        document.querySelector("#player1Dice").innerHTML=diceWith3Dots

    }
    if(dice1==4){
        document.querySelector("#player1Dice").innerHTML=diceWith4Dots

    }
    if(dice1==5){
        document.querySelector("#player1Dice").innerHTML=diceWith5Dots

    }
    if(dice1==6){
        document.querySelector("#player1Dice").innerHTML=diceWith6Dots

    }


    // condition for dice 2
    if(dice2==1){
        document.querySelector("#player2Dice").innerHTML= diceWith1Dot;
    }
    if(dice2==2){
        document.querySelector("#player2Dice").innerHTML=diceWith2Dots

    }
    if(dice2==3){
        document.querySelector("#player2Dice").innerHTML=diceWith3Dots

    }
    if(dice2==4){
        document.querySelector("#player2Dice").innerHTML=diceWith4Dots

    }
    if(dice2==5){
        document.querySelector("#player2Dice").innerHTML=diceWith5Dots

    }
    if(dice2==6){
        document.querySelector("#player2Dice").innerHTML=diceWith6Dots

    }

    
    diceGame(dice1,dice2);
}


function diceGame(player1Dice, player2dice){
    if(player1Dice>player2dice){
        console.log("player 1 wins, player = " + player1Dice +" and Player 2 =" + player2dice)
        // changing h1
        document.querySelector("h1").textContent= ("Player 1 Wins")
    }
    else if(player1Dice==player2dice){
        console.log("Draw, player = " + player1Dice +" and Player 2 =" + player2dice)
        // changing h1
        document.querySelector("h1").textContent= ("Draw")
        
    }
    else{
        document.querySelector("h1").textContent =("Player 2 Wins")
        console.log("player 2 wins, player = " + player1Dice +" and Player 2 =" + player2dice)
    }


}

randomDiceNumber();