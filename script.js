'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 21;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23; */

let SecretNumber = Math.trunc(Math.random()*20) +1;
let score = 20;
let highscore = 0;


const displayFunction = function(message) {
    document.querySelector('.message').textContent = message;
}

const displayScore = function(Score) {
    document.querySelector('.score').textContent = Score;
}

const setWidth = function(Width) {
    document.querySelector('.number').style.width = Width;
}

const setBgColor = function(color) {
    document.querySelector('body').style.backgroundColor = color;
}

const setHighScore = function(HighScore) {
    document.querySelector('.highscore').textContent = HighScore;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    
    if(!guess){
        //When there is no guess
        displayFunction('No Number !');
    }
    //when guess is wrong
    else if(guess!==SecretNumber){
        if(score>1)
        {
            // document.querySelector('.message').textContent = ;
            displayFunction(guess > SecretNumber ? "Too High !😒" : "Too Low !😒");
            score--;
            displayScore(score);
            
        }
        else
        {
            displayFunction( "You Lose the Game !");
            displayScore('0');
        }
    }
    else if(guess === SecretNumber)
    {
        //when guess is matched.
        displayFunction("Number Found !! 🙂");
        document.querySelector('.number').textContent = SecretNumber;
        setBgColor('#60b347');
        setWidth('30rem');

        if(score > highscore)
        {
            highscore = score;
            setHighScore(score);
        }
    }
}) 

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    SecretNumber = Math.trunc(Math.random()*20) +1;
    displayFunction('Start guessing...');
    displayScore(score);
    setBgColor('#222');
    document.querySelector('.number').textContent = '?';
    setWidth('15rem');
    document.querySelector('.guess').value = ' ';
})