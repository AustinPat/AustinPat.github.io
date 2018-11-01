/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores, roundScores, activePlayer, gamePlaying, previousRoll;

init();



//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';



//var x = document.querySelector('#score-0').textContent;



document.querySelector('.btn-roll').addEventListener('click', function (){
    if(gamePlaying) 
    {
       //get random number
    var dice = Math.floor(Math.random() * 6) + 1;
    var dice1 = Math.floor(Math.random() * 6) + 1;
  

    // display result
    var diceDOM = document.querySelector('.dice')
    var diceDOM1 = document.querySelector('.dice1')
    diceDOM.style.display = 'block'; 
    diceDOM1.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    diceDOM1.src = 'dice-' + dice1 + '.png';
       
   
   

    // update round score if the rolled number was not 1

    if (dice !== 1 && dice1 !== 1)
        {
            roundScore += dice + dice1;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        }
    else
        {
           nextPlayer();
        }
    if(previousRoll === 6)
        {
        document.getElementById('score-' + activePlayer).textContent = '0';
        console.log('you rolled 6 twice');
        nextPlayer();
        }
        
        previousRoll =  dice;
        previousRoll = dice1;
    
    }

});


document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying)
      {
         scores[activePlayer] += roundScore;
    
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
          
    var input = document.querySelector('input').value;
    var winningScore
    
    if(input)
        {
            winningScore = input;
        }
    else
        {
            winningScore = 100;
        }
        
        
        
    if (scores[activePlayer] >= winningScore)
    {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none'; 
        document.querySelector('.dice1').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    }
    else
    {
        nextPlayer();
    }
    
       }
  
});

function nextPlayer() 
{
     activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');
        
       
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice1').style.display = 'none';
}


document.querySelector('.btn-new').addEventListener('click', init);


function init()
{
     scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    previousRoll = 0;
    
    
    
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.dice1').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.querySelector('#name-0').textContent = 'Player 1';
document.querySelector('#name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
};

 