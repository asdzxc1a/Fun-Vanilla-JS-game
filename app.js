/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;



//document.querySelector('#current-' + activePlayer).textContent = dice; // To change a text in this element we have to use another method which is textContent

//document.querySelector('#current-' + activePlayer).innerHTML ='<em>' + dice + '</em>';// every time we need to write something in JS it should be a string ''. 

//To get a value we can stored this seletor to a variable 

var x = document.querySelector('#current-' + activePlayer).textContent;

//It will just stored and don't do anything else.'

// To change a CSS we can do this.

document.querySelector('.dice').style.display = 'none';

//document.querySelector('.btn-roll').addEventListener('click', btn);

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


//Callback funtion is a function that put into another funtion and callbak funtion called by that function but not us.

//Example:
//document.querySelector('.btn-roll').addEventListener('click', btn);

//Anonymes function is a function that dosen't have a name it can't be reused


//Example:

document.querySelector('.btn-roll').addEventListener('click', function() {
  // 1.Random number
   var dice = Math.floor(Math.random() * 6) + 1;
    
    //2. Display the result
   var diceDom =  document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';// We use this to select png photo with numbers that each random number had a photo with it. 
    
    // 035 Events and Event Handling Rolling the Dice. 13:00 min
    
    
    //3. Update the round score IF the rolled number was NOT a 1
    
    if(dice !== 1) {
        //Add score
        roundScore +=dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore; 
    } else {
         //Next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
//        if(activePlayer === 0) {
//            activePlayer = 1;
//        } else {
//            activePlayer = 0;
//        }
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
       document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';
        
//        document.querySelector('.player-0-panel').classList.remo[/'ve('active');{{\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\}}
//        document.querySelector('.player-1-panel').classList.add('active');
        
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
  // Add CURRENT score to GLOBAL score 
    scores[activePlayer] += roundScore;
    
    //Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    // Check if the player won the game
    if ( scores[activePlayer] >= 50) {
        document.querySelector('#name-' + activePlayer).innerHTML = 'Winner';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
} else {
    nextPlayer();
}
    
    
});

function nextPlayer () {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
//        if(activePlayer === 0) {
//            activePlayer = 1;
//        } else {
//            activePlayer = 0;
//        }
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
       document.querySelector('.player-1-panel').classList.toggle('active');
        
        document.querySelector('.dice').style.display = 'none';
          
};
 //NEW GAME BUTTON
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
scores = [0,0];
roundScore = 0;
activePlayer = 0;
    
document.querySelector('.dice').style.display = 'none';

//document.querySelector('.btn-roll').addEventListener('click', btn);

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
    
 document.querySelector('#name-0').innerHTML = 'Player 1';
 document.querySelector('#name-1').innerHTML = 'Player 2';

}
//"? - means "then"
//: - means "else"