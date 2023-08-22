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


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    
    if(!guess){
        //When there is no guess
        document.querySelector('.message').textContent = 'No Number';
    }
    else if(guess === SecretNumber)
    {
        //when guess is matched.
        document.querySelector('.message').textContent = "Number Found !! 🙂";
        document.querySelector('.number').textContent = SecretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if(score > highscore)
        {
            highscore = score;
            document.querySelector('.highscore').textContent = score;
        }
    }
    else if(guess > SecretNumber)
    {
     //when guess is higher.   
        if(score>1)
        {
            document.querySelector('.message').textContent = "Too High !😒";
            score--;
            document.querySelector('.score').textContent = score;
            
        }
        else
        {
            document.querySelector('.message').textContent = "You Lose the Game !";
            document.querySelector('.score').textContent =0;
        }
        
    }
    else if(guess < SecretNumber)
    {
        //When guess is lower.
        if(score>1)
        {
            document.querySelector('.message').textContent = "Too Low !😒";
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            document.querySelector('.message').textContent = "You Lose the Game !";
            document.querySelector('.score').textContent =0;
        }
        
    }
}) 

document.querySelector('.again').addEventListener('click', function() {
    score = 20;
    SecretNumber = Math.trunc(Math.random()*20) +1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = ' ';
})