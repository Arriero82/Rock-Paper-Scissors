
//random choice for computer
function computerPlay(){
    let randomChoice = Math.floor((Math.random()*3));
    const choices = ['rock', 'paper', 'scissors'];
    let computerChoice = choices[randomChoice];
    return computerChoice;
}
let computerSelection = computerPlay();
let playerCount = 0;
let computerCount = 0;


//gives different results for each player and computer choices
function playRound(playerSelection, computerSelection) {

    if(playerSelection=='rock'){
        if(computerSelection=='rock'){
            console.log('it\'s a tie');
        };
        if(computerSelection=='paper'){
            console.log('You lose, paper wraps the rock');
            computerCount+=1;
        };
        if(computerSelection=='scissors'){
            console.log('You win, rock smashes scissors');
            playerCount+=1;
        };

    }
    if(playerSelection=='paper'){
        if(computerSelection=='rock'){
            console.log('You win, paper wraps the rock');
            playerCount+=1;
        };
        if(computerSelection=='paper'){
            console.log('it\'s a tie');
        };
        if(computerSelection=='scissors'){
            console.log('You lose, paper is not match against scissors');
            computerCount+=1;
        };
    }
    if(playerSelection=='scissors'){
        if(computerSelection=='rock'){
            console.log('You lose, rock smashes scissors');
            computerCount+=1;
        };
        if(computerSelection=='paper'){
            console.log('You win, paper is not match against scissors');
            playerCount+=1;
        };
        if(computerSelection=='scissors'){
            console.log('it\'s a tie');
        };
    }
}
/*
function game (){
    for(i=0;i<5;i++){
        computerSelection = computerPlay();
        let playerSelection = (prompt('Write your choice rock, paper or scissors')).toLowerCase();
        playRound(playerSelection, computerSelection)
    }
    console.log(playerCount);
    console.log(computerCount);
}
*/
//evaluate the winner of the match, first to get to 5 wins. calls playround function.
function game(){
    while(playerCount<5 && computerCount<5){
        let playerSelection = (prompt('Write your choice rock, paper or scissors')).toLowerCase();
        computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
        console.log("Player wins "+playerCount);
        console.log("Computer wins "+computerCount);
    }

}

game();


