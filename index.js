const computerRes=document.getElementById("computerRes");
const playerRes=document.getElementById("playerRes");
const whoWon=document.getElementById("whoWon");
const arr=['rock','paper','scissors'];
let playerScr=0;
let computerScr=0;
const playerScore=document.getElementById("green");
const computerScore=document.getElementById("red");

function execute(player){
    let computer=arr[Math.floor(Math.random() * 3)];
    let res = "";
    if(player === computer){
        res="It's a tie";
    }
    else{
        if(player === "rock"){
            res=(computer === "scissors")? "You Win😍" : "You Lose🤞";
        }
        else if(player=="paper"){
            res=(computer === "rock")? "You Win😍" : "You Lose🤞";
        }
        else{
            res=(computer === "paper")? "You Win😍" : "You Lose🤞";
        }
    }
    computerRes.textContent=`Computer : ${computer}`;
    playerRes.textContent=`Player : ${player}`;
    whoWon.textContent=res;
    whoWon.classList.remove("greentext");
    whoWon.classList.remove("redtext")

    if(res === "You Win😍"){
        playerScr++;
        whoWon.classList.add("greentext");
        playerScore.textContent=playerScr;
    }
    else if(res === "You Lose🤞"){
        computerScr++;
        whoWon.classList.add("redtext");
        computerScore.textContent=computerScr;
    }
}