let userScore = 0;
let computerScore = 0;


const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const computerScorePara = document.querySelector("#computer-score")

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
     const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}

const drawGame = () => {
    msg.innerText = "It's a Draw! Try Again";
     msg.style.backgroundColor = "#081b31";
}

const showWinner = (userWin) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = "Congratulations! You Win"
         msg.style.backgroundColor = "Green";
    } else{
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = "You lose! Try Again"
         msg.style.backgroundColor = "Red";
    }
}


const playGame = (userChoice) => {
     const computerChoice = genComputerChoice();
      let userWin;

  if (userChoice === computerChoice) {
    drawGame();
    return;
  }

  if (userChoice === "rock") {
    userWin = computerChoice === "scissors";
  } else if (userChoice === "paper") {
    userWin = computerChoice === "rock";
  } else {
    userWin = computerChoice === "paper";
  }

  showWinner(userWin);
};
    

        


choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id")
        playGame(userChoice )
    })
    }
)


