function computerPlay(){
    let randomChoice = Math.floor((Math.random()*3));
    const choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[randomChoice];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection=='rock'){
        if(computerSelection=='rock'){
            console.log('it\'s a tie');
        };
        if(computerSelection=='paper'){
            console.log('You lose, paper wraps the rock');
        };
        if(computerSelection=='scissors'){
            console.log('You win, rock smashes scissors');
        };

    }
    if(playerSelection=='paper'){
        if(computerSelection=='rock'){
            console.log('You win, paper wraps the rock');
        };
        if(computerSelection=='paper'){
            console.log('it\'s a tie');
        };
        if(computerSelection=='scissors'){
            console.log('You lose, paper is not match against scissors');
        };
    }
    if(playerSelection=='scissors'){
        if(computerSelection=='rock'){
            console.log('You lose, rock smashes scissors');
        };
        if(computerSelection=='paper'){
            console.log('You win, paper is not match against scissors');
        };
        if(computerSelection=='scissors'){
            console.log('it\'s a tie');
        };
    }
}

  
  const playerSelection = (prompt('Write your choice rock, paper or scissors')).toLowerCase();
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));