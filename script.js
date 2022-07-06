'use strict';



let scecretNumber = Math.trunc(Math.random()*20) +1;
let score = 20;
let highscore = 0;







document.querySelector('.check').addEventListener('click', function(){
    var guess =  Number(document.querySelector('.guess').value);

    // no input scenario
if(!guess){
document.querySelector('.message').textContent = 'NO number!';
}else if (guess > 20){
    document.querySelector('.message').textContent = 'Type a number between 1 and 20!';
}
 
// when number is corect
else if( guess === scecretNumber){
    document.querySelector('.message').textContent = 'Corcet number '; 
document.querySelector('body').style.backgroundColor = '#60b347';
document.querySelector('.number').style.width = '30rem';
document.querySelector('.number').textContent = scecretNumber ;

if (score > highscore){
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
}

}else if (score !== scecretNumber){
    if(score > 1 ){
        document.querySelector('.message').textContent = guess > scecretNumber ? 'Too High' : 'Too low!';
        score--;
        document.querySelector('.score').textContent = score;
    }else{
        document.querySelector('.message').textContent = 'Lose game!';
        document.querySelector('.score').textContent = 0;
    }
}
});

document.querySelector('.again').addEventListener('click' , function (){
    score = 20;
    scecretNumber = Math.trunc(Math.random()*20) +1;
    document.querySelector('.message').textContent = 'Start guessing...  '
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent  = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
document.querySelector('.number').style.width = '15rem';
});


