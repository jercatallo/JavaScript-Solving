//Snakes and Ladders

//Problem Link - https://www.codewars.com/kata/587136ba2eefcb92a9000027/train/javascript

var game = new SnakesLadders();
var player1 = 0;
var player2 = 0;
var surplus = 0;
var turn = true;
var winner = "";



function SnakesLadders() {

};


SnakesLadders.prototype.play = function(die1, die2) {


 


  //Rolling the Dice
  var playerRoll = 0;
  playerRoll += die1 + die2;
  if(turn == true){
    var player1Status = "";
    player1 += playerRoll;
      //To bounce back if it is greater than 100
    if(player1 > 100){
      surplus += player1 - 100;
      var bounce = surplus * 2;
      player1 -= bounce;
      surplus = 0 ;
    
     }
     switch(player1){
      //For Ladders
      case 2:
        player1 = 38;
      break;
      case 7:
        player1 = 14;
      break;
      case 8:
        player1 = 31;
      break;
      case 15:
        player1 = 26;
      break;
      case 21:
        player1 = 42;
      break;
      case 28:
        player1 = 84;
      break;
      case 36:
        player1 = 44;
      break;
      case 51:
        player1 = 67;
      break;
      case 71:
        player1 = 91;
      break;
      case 78:
        player1 = 98;
      break;
      //For Snakes
      case 16:
        player1 = 6;
      break;
      case 46:
        player1 = 25;
      break;
      case 49:
        player1 = 11;
      break;
      case 62:
        player1 = 19;
      break;
      case 64:
        player1 = 60;
      break;
      case 74:
        player1 = 54;
      break;
      case 89:
        player1 = 68;
      break;
      case 92:
        player1 = 88;
      break;
      case 95:
        player1 = 75;
      break;
      case 99:
        player1 = 80;
      break;
    }
  
    player1Status += "Player 1 is on square " + player1;
      //To Reroll the dice if their value is the same
    if(die1 == die2){
      turn = true;
  
    }else{
      turn = false;
    }
    console.log(player1Status);
    //return player1Status;
   
  }else{
    var player2Status = "";
    player2 += playerRoll;
      //To bounce back if it is greater than 100
    if(player2 > 100){
      surplus += player2 - 100;
      var bounce = surplus * 2;
      player2 -= bounce;
      surplus = 0 ;
     }
     switch(player2){
      //For Ladders
      case 2:
        player2 = 38;
      break;
      case 7:
        player2 = 14;
      break;
      case 8:
        player2 = 31;
      break;
      case 15:
        player2 = 26;
      break;
      case 21:
        player2 = 42;
      break;
      case 28:
        player2 = 84;
      break;
      case 36:
        player2 = 44;
      break;
      case 51:
        player2 = 67;
      break;
      case 71:
        player2 = 91;
      break;
      case 78:
        player2 = 98;
      break;
      //For Snakes
      case 16:
        player2 = 6;
      break;
      case 46:
        player2 = 25;
      break;
      case 49:
        player2 = 11;
      break;
      case 62:
        player2 = 19;
      break;
      case 64:
        player2 = 60;
      break;
      case 74:
        player2 = 54;
      break;
      case 89:
        player2 = 68;
      break;
      case 92:
        player2 = 88;
      break;
      case 95:
        player2 = 75;
      break;
      case 99:
        player2 = 80;
      break;
    }
  
    player2Status += "Player 2 is on square " + player2;
    
      //To Reroll the dice if their value is the same
    if(die1 == die2){
      turn = false;
    }else{
      turn = true;
    }
    console.log(player2Status);
     //return player2Status;

  }

  if(player1 == 100){
    winner += "Player 1 Wins!";
    console.log(winner);
    //return winner;
  }
  if(player2 == 100){
    winner += "Player 2 Wins!";
    console.log(winner);
   //return winner;
  }


  //To Revert the value of the dice
  playerRoll = 0;
 
}


while(player1 < 100 || player2 < 100){

  var die1Random = Math.round(Math.random() * 6);
  var die2Random = Math.round(Math.random() * 6);
  game.play(die1Random,die2Random);

  //Snakes and Ladders Points


  if(player1 == 100){
    break;
  }
  if(player2 == 100){
    break;
  }
}






