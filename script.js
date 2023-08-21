'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 21;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23; */

const SecretNumber = Math.trunc(Math.random()*20) +1;
let score = 20;

document.querySelector('.number').textContent = SecretNumber;

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    
    if(!guess){
        document.querySelector('.message').textContent = 'No Number';
    }
    else if(guess === SecretNumber)
    {
        document.querySelector('.message').textContent = "Number Found !! 🙂";
    }
    else if(guess > SecretNumber)
    {
        
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
