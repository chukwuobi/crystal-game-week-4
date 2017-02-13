var totalScore = 0;
var winScore = 0;
var points = 0;
var wins = 0;
var losses = 0;
var gem1, gem2, gem3, gem4;
winGame();
loseGame();
newGame();
resetGame();
play();

	var winScore = Math.floor((Math.random()*399+1);
	var gem1=Math.floor(Math.random()*99+1);
}	var gem2=Math.floor(Math.random()*99+1);
	var gem3=Math.floor(Math.random()*99+1);
	var gem4=Math.floor(Math.random()*99+1);

	$("#wins").html(wins);
	$("#losses").html(losses);

function play() {


	function resetGame(){
      winScore=Math.floor(Math.random()*399+1);
      console.log(winScore)
      $("#total").text(winScore);
      gem1= Math.floor(Math.random()*99+1);
      gem2= Math.floor(Math.random()*99+1);
      gem3= Math.floor(Math.random()*99+1);
      gem4= Math.floor(Math.random()*99+1);
      totalScore= 0;
      $("#total").html(totalScore);
      } 

	function winGame(){
	alert("Congratulations!");
  	wins++; 
  	$("#wins").html(wins);
  	resetGame();
		}		

	function loseGame(){
	alert ("Sorry, Try Again!");
	  losses++;
	  $("#losses").html(losses);
	  resetGame();
		}

	  $("#crystal1").on('click', function(){
	    totalScore = totalScore + gem1;
	    console.log("New Total Score= " + totalScore);
	    $("#total").html(totalScore); 
	          
	        if (totalScore == winScore){
	          winGame();
	        }
	        else if ( totalScore > winScore){
	          loseGame();
	        }   
	  })  
	  $("#crystal2").on('click', function(){
	    totalScore = totalScore + gem2;
	    console.log("New Total Score= " + totalScore);
	    $("#total").html(totalScore); 
	        if (totalScore == winScore){
	          winGame();
	        }
	        else if (totalScore > winScore){
	          loseGame();
	        } 
	  })  
	  $("#Crystal3").on('click', function(){
	    totalScore = totalScore + gem3;
	    console.log("New Total Score= " + totalScore);
	    $("#total").html(totalScore);
	        if (totalScore == winScore){
	          winGame();
	        }
	        else if (totalScore > winScore){
	          loseGame();
	        } 
	  })  
	  $("#crystal4").on('click', function(){
	    totalScore = totalScore + gem4;
	    console.log("New Total Score= " + totalScore);
	    $("#total").html(totalScore); 
	      
	        if (totalScore == winScore){
	          winGame();
	        }
	        else if ( totalScore > winScore){
	          loseGame();
        }
  });   
}); 




//$(document).ready()