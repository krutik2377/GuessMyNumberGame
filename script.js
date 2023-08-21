'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 21;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23; */

const SecretNumber = Math.trunc(Math.random()*20) +1;

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
        document.querySelector('.message').textContent = "Too High !😒";
    }
    else if(guess < SecretNumber)
    {
        document.querySelector('.message').textContent = "Too Low !😒";
    }
}) 
