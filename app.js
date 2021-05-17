const game = () => {
  let pscore = 0;
  let cscore = 0;
  //start game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //play match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });

    // computer options
    const computerOption = ["rock", "paper", "scissors"];

    options.forEach((option) => {
      option.addEventListener("click", function () {
        //console.log(this);
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOption[computerNumber];
        // Here where we call compare hands

        setTimeout(() => {
          //Here is where we call compare hands
          compareHand(this.textContent, computerChoice);
          //Update Images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 1000);
        // aniamation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };
  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pscore;
    computerScore.textContent = cscore;
  };

  const compareHand = (playerChoice, computerChoice) => {
    //
    const winner = document.querySelector(".winner");
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }
    ///chcek  for rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        pscore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cscore++;
        updateScore();
        return;
      }
    }
    //
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins";
        cscore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pscore++;
        updateScore();
        return;
      }
    }
    //
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        return;
      } else {
        winner.textContent = "Player Wins";
        return;
      }
    }
  };

  //Is call  all  the inner function

  startGame();
  playMatch();
};

//start the game function
game();
