

//*GAME LOGIC*//
const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;


function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add('flip');

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }
  
  secondCard = this;
  checkForMatch();
}

//*CHECK MATCH*//
  var cardsOk = 0;

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();

  if(isMatch === true){
  cardsOk += 1;
  }


//*GAME HAS END*//
  if(cardsOk === 6){
      
    const congratsMessage = document.querySelector('.congrats');
    var dialog = document.getElementById('dialog');

var timer =  setInterval(function(){
    timerText.style.display = 'none';
    dialog.style.display = 'block'
    congratsMessage.textContent = 'FELICITATS! HAS GUANYAT';
    const playAgain = document.getElementById('play-again');
    const moveScore = document.getElementById('moveScore');
    moveScore.textContent = moveText.textContent;
    playAgain.textContent = "Tornar a jugar"    

    
    playAgain.addEventListener('click', function (evt){
    window.location.reload();
    });
    if(playAgain.textContent === "Tornar a jugar"){
      clearInterval(timer);
    }
  }, 500);
  }
  
}

function disableCards() {
  firstCard.removeEventListener('click', flipCard);
  secondCard.removeEventListener('click', flipCard);

  resetBoard();
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove('flip');
    secondCard.classList.remove('flip');

    resetBoard();
  }, 600);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

//*RANDOM ORDER*//
(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

//*RANDOM DISPLAY*//
randomNumber = Math.floor(Math.random() * 11+1);

window.onload = function() {
	if (randomNumber == 1) {
		document.getElementById("RIDER").style.display = "none";
		document.getElementById("SOLDEU").style.display = "none";
		document.getElementById("ABARSET").style.display = "none";
    document.getElementById("RESTAURACIO").style.display = "none";
    document.getElementById("SKI").style.display = "none";
    document.getElementById("CABANYA").style.display = "inline";
    document.getElementById("ACTIVITATS").style.display = "inline";
    document.getElementById("PAS").style.display = "none";
		document.getElementById("ALIGA").style.display = "inline";
		document.getElementById("PESSONS").style.display = "inline";
    document.getElementById("ACTIVITIES").style.display = "inline";
		document.getElementById("RATRAC").style.display = "none";
    document.getElementById("PAISATGE").style.display = "none";
		document.getElementById("RIDER1").style.display = "none";
		document.getElementById("SOLDEU1").style.display = "none";
		document.getElementById("ABARSET1").style.display = "none";
    document.getElementById("RESTAURACIO1").style.display = "none";
    document.getElementById("SKI1").style.display = "none";
    document.getElementById("CABANYA").style.display = "inline";
    document.getElementById("ACTIVITATS").style.display = "inline";
    document.getElementById("PAS").style.display = "inline";
		document.getElementById("ALIGA").style.display = "inline";
		document.getElementById("PESSONS").style.display = "inline";
    document.getElementById("ACTIVITIES").style.display = "inline";
    document.getElementById("RATRAC1").style.display = "none";
    document.getElementById("PAISATGE1").style.display = "none";
	}
	if (randomNumber == 2) {
		document.getElementById("RIDER").style.display = "inline";
		document.getElementById("SOLDEU").style.display = "none";
		document.getElementById("ABARSET").style.display = "inline";
    document.getElementById("RESTAURACIO").style.display = "none";
    document.getElementById("SKI").style.display = "none";
    document.getElementById("CABANYA").style.display = "inline";
    document.getElementById("ACTIVITATS").style.display = "none";
    document.getElementById("PAS").style.display = "none";
		document.getElementById("ALIGA").style.display = "inline";
		document.getElementById("PESSONS").style.display = "none";
    document.getElementById("ACTIVITIES").style.display = "inline";
    document.getElementById("RATRAC").style.display = "inline";
    document.getElementById("PAISATGE").style.display = "none";
		document.getElementById("RIDER").style.display = "inline";
		document.getElementById("SOLDEU1").style.display = "none";
		document.getElementById("ABARSET").style.display = "inline";
    document.getElementById("RESTAURACIO1").style.display = "none";
    document.getElementById("SKI1").style.display = "none";
    document.getElementById("CABANYA").style.display = "inline";
    document.getElementById("ACTIVITATS1").style.display = "none";
    document.getElementById("PAS1").style.display = "none";
		document.getElementById("ALIGA").style.display = "inline";
		document.getElementById("PESSONS1").style.display = "none";
    document.getElementById("ACTIVITIES").style.display = "inline"; 
    document.getElementById("RATRAC").style.display = "inline";
    document.getElementById("PAISATGE1").style.display = "none";
	}
	if (randomNumber == 3) {
		document.getElementById("RIDER").style.display = "inline";
		document.getElementById("SOLDEU").style.display = "none";
		document.getElementById("ABARSET").style.display = "none";
    document.getElementById("RESTAURACIO").style.display = "inline";
    document.getElementById("SKI").style.display = "none";
    document.getElementById("CABANYA").style.display = "inline";
    document.getElementById("ACTIVITATS").style.display = "none";
    document.getElementById("PAS").style.display = "inline";
		document.getElementById("ALIGA").style.display = "none";
		document.getElementById("PESSONS").style.display = "none";
    document.getElementById("ACTIVITIES").style.display = "inline";
    document.getElementById("RATRAC").style.display = "none";
    document.getElementById("PAISATGE").style.display = "inline";
		document.getElementById("RIDER").style.display = "inline";
		document.getElementById("SOLDEU1").style.display = "none";
		document.getElementById("ABARSET1").style.display = "none";
    document.getElementById("RESTAURACIO").style.display = "inline";
    document.getElementById("SKI1").style.display = "none";
    document.getElementById("CABANYA").style.display = "inline";
    document.getElementById("ACTIVITATS1").style.display = "none";
    document.getElementById("PAS").style.display = "inline";
		document.getElementById("ALIGA1").style.display = "none";
		document.getElementById("PESSONS1").style.display = "none";
    document.getElementById("ACTIVITIES").style.display = "inline";
    document.getElementById("RATRAC1").style.display = "none";
    document.getElementById("PAISATGE").style.display = "inline";
	}
	if (randomNumber == 4) {
		document.getElementById("RIDER").style.display = "none";
		document.getElementById("SOLDEU").style.display = "inline";
		document.getElementById("ABARSET").style.display = "none";
    document.getElementById("RESTAURACIO").style.display = "none";
    document.getElementById("SKI").style.display = "inline";
    document.getElementById("CABANYA").style.display = "inline";
    document.getElementById("ACTIVITATS").style.display = "inline";
    document.getElementById("PAS").style.display = "inline";
		document.getElementById("ALIGA").style.display = "inline";
		document.getElementById("PESSONS").style.display = "none";
    document.getElementById("ACTIVITIES").style.display = "none";
    document.getElementById("RATRAC").style.display = "none";
    document.getElementById("PAISATGE").style.display = "none";
		document.getElementById("RIDER1").style.display = "none";
		document.getElementById("SOLDEU").style.display = "inline";
		document.getElementById("ABARSET1").style.display = "none";
    document.getElementById("RESTAURACIO1").style.display = "none";
    document.getElementById("SKI").style.display = "inline";
    document.getElementById("CABANYA").style.display = "inline";
    document.getElementById("ACTIVITATS").style.display = "inline";
    document.getElementById("PAS").style.display = "inline";
		document.getElementById("ALIGA").style.display = "inline";
		document.getElementById("PESSONS1").style.display = "none";
    document.getElementById("ACTIVITIES1").style.display = "none";
    document.getElementById("RATRAC1").style.display = "none";
    document.getElementById("PAISATGE1").style.display = "none";
  }
  if (randomNumber == 5) {
		document.getElementById("RIDER").style.display = "none";
		document.getElementById("SOLDEU").style.display = "none";
		document.getElementById("ABARSET").style.display = "inline";
    document.getElementById("RESTAURACIO").style.display = "inline";
    document.getElementById("SKI").style.display = "none";
    document.getElementById("CABANYA").style.display = "none";
    document.getElementById("ACTIVITATS").style.display = "none";
    document.getElementById("PAS").style.display = "none";
		document.getElementById("ALIGA").style.display = "inline";
		document.getElementById("PESSONS").style.display = "none";
    document.getElementById("ACTIVITIES").style.display = "inline";
    document.getElementById("RATRAC").style.display = "inline";
    document.getElementById("PAISATGE").style.display = "inline";
		document.getElementById("RIDER1").style.display = "none";
		document.getElementById("SOLDEU1").style.display = "none";
		document.getElementById("ABARSET").style.display = "inline";
    document.getElementById("RESTAURACIO").style.display = "inline";
    document.getElementById("SKI1").style.display = "none";
    document.getElementById("CABANYA1").style.display = "none";
    document.getElementById("ACTIVITATS1").style.display = "none";
    document.getElementById("PAS1").style.display = "none";
		document.getElementById("ALIGA").style.display = "inline";
		document.getElementById("PESSONS1").style.display = "none";
    document.getElementById("ACTIVITIES").style.display = "inline";
    document.getElementById("RATRAC").style.display = "inline";
    document.getElementById("PAISATGE").style.display = "inline";
  }
  if (randomNumber == 6) {
		document.getElementById("RIDER").style.display = "inline";
		document.getElementById("SOLDEU").style.display = "none";
		document.getElementById("ABARSET").style.display = "inline";
    document.getElementById("RESTAURACIO").style.display = "inline";
    document.getElementById("SKI").style.display = "inline";
    document.getElementById("CABANYA").style.display = "none";
    document.getElementById("ACTIVITATS").style.display = "none";
    document.getElementById("PAS").style.display = "none";
		document.getElementById("ALIGA").style.display = "none";
		document.getElementById("PESSONS").style.display = "none";
    document.getElementById("ACTIVITIES").style.display = "inline";
    document.getElementById("RATRAC").style.display = "none";
    document.getElementById("PAISATGE").style.display = "inline";
		document.getElementById("RIDER").style.display = "inline";
		document.getElementById("SOLDEU1").style.display = "none";
		document.getElementById("ABARSET").style.display = "inline";
    document.getElementById("RESTAURACIO").style.display = "inline";
    document.getElementById("SKI").style.display = "inline";
    document.getElementById("CABANYA1").style.display = "none";
    document.getElementById("ACTIVITATS1").style.display = "none";
    document.getElementById("PAS1").style.display = "none";
		document.getElementById("ALIGA1").style.display = "none";
		document.getElementById("PESSONS1").style.display = "none";
    document.getElementById("ACTIVITIES").style.display = "inline";
    document.getElementById("RATRAC1").style.display = "none";
    document.getElementById("PAISATGE").style.display = "inline";
  }
  if (randomNumber == 7) {
		document.getElementById("RIDER").style.display = "none";
		document.getElementById("SOLDEU").style.display = "inline";
		document.getElementById("ABARSET").style.display = "inline";
    document.getElementById("RESTAURACIO").style.display = "none";
    document.getElementById("SKI").style.display = "none";
    document.getElementById("CABANYA").style.display = "inline";
    document.getElementById("ACTIVITATS").style.display = "none";
    document.getElementById("PAS").style.display = "inline";
		document.getElementById("ALIGA").style.display = "none";
		document.getElementById("PESSONS").style.display = "none";
    document.getElementById("ACTIVITIES").style.display = "inline";
    document.getElementById("RATRAC").style.display = "inline";
    document.getElementById("PAISATGE").style.display = "none";
		document.getElementById("RIDER1").style.display = "none";
		document.getElementById("SOLDEU").style.display = "inline";
		document.getElementById("ABARSET").style.display = "inline";
    document.getElementById("RESTAURACIO1").style.display = "none";
    document.getElementById("SKI1").style.display = "none";
    document.getElementById("CABANYA").style.display = "inline";
    document.getElementById("ACTIVITATS1").style.display = "none";
    document.getElementById("PAS").style.display = "inline";
		document.getElementById("ALIGA1").style.display = "none";
		document.getElementById("PESSONS1").style.display = "none";
    document.getElementById("ACTIVITIES").style.display = "inline";
    document.getElementById("RATRAC").style.display = "inline";
    document.getElementById("PAISATGE1").style.display = "none";
  }
  if (randomNumber == 8) {
		document.getElementById("RIDER").style.display = "inline";
		document.getElementById("SOLDEU").style.display = "none";
		document.getElementById("ABARSET").style.display = "none";
    document.getElementById("RESTAURACIO").style.display = "inline";
    document.getElementById("SKI").style.display = "none";
    document.getElementById("CABANYA").style.display = "inline";
    document.getElementById("ACTIVITATS").style.display = "inline";
    document.getElementById("PAS").style.display = "none";
		document.getElementById("ALIGA").style.display = "inline";
		document.getElementById("PESSONS").style.display = "inline";
    document.getElementById("ACTIVITIES").style.display = "none";
    document.getElementById("RATRAC").style.display = "none";
    document.getElementById("PAISATGE").style.display = "none";
		document.getElementById("RIDER").style.display = "inline";
		document.getElementById("SOLDEU1").style.display = "none";
		document.getElementById("ABARSET1").style.display = "none";
    document.getElementById("RESTAURACIO").style.display = "inline";
    document.getElementById("SKI1").style.display = "none";
    document.getElementById("CABANYA").style.display = "inline";
    document.getElementById("ACTIVITATS").style.display = "inline";
    document.getElementById("PAS1").style.display = "none";
		document.getElementById("ALIGA").style.display = "inline";
		document.getElementById("PESSONS").style.display = "inline";
    document.getElementById("ACTIVITIES1").style.display = "none";
    document.getElementById("RATRAC1").style.display = "none";
    document.getElementById("PAISATGE1").style.display = "none";
  }
  if (randomNumber == 9) {
		document.getElementById("RIDER").style.display = "inline";
		document.getElementById("SOLDEU").style.display = "inline";
		document.getElementById("ABARSET").style.display = "inline";
    document.getElementById("RESTAURACIO").style.display = "none";
    document.getElementById("SKI").style.display = "inline";
    document.getElementById("CABANYA").style.display = "none";
    document.getElementById("ACTIVITATS").style.display = "none";
    document.getElementById("PAS").style.display = "inline";
		document.getElementById("ALIGA").style.display = "none";
		document.getElementById("PESSONS").style.display = "none";
    document.getElementById("ACTIVITIES").style.display = "none";
    document.getElementById("RATRAC").style.display = "none";
    document.getElementById("PAISATGE").style.display = "inline";
		document.getElementById("RIDER").style.display = "inline";
		document.getElementById("SOLDEU").style.display = "inline";
		document.getElementById("ABARSET").style.display = "inline";
    document.getElementById("RESTAURACIO1").style.display = "none";
    document.getElementById("SKI").style.display = "inline";
    document.getElementById("CABANYA1").style.display = "none";
    document.getElementById("ACTIVITATS1").style.display = "none";
    document.getElementById("PAS").style.display = "inline";
		document.getElementById("ALIGA1").style.display = "none";
		document.getElementById("PESSONS1").style.display = "none";
    document.getElementById("ACTIVITIES1").style.display = "none";
    document.getElementById("RATRAC1").style.display = "none";
    document.getElementById("PAISATGE").style.display = "inline";
  }
  if (randomNumber == 10) {
		document.getElementById("RIDER").style.display = "inline";
		document.getElementById("SOLDEU").style.display = "inline";
		document.getElementById("ABARSET").style.display = "none";
    document.getElementById("RESTAURACIO").style.display = "none";
    document.getElementById("SKI").style.display = "inline";
    document.getElementById("CABANYA").style.display = "none";
    document.getElementById("ACTIVITATS").style.display = "none";
    document.getElementById("PAS").style.display = "inline";
		document.getElementById("ALIGA").style.display = "none";
		document.getElementById("PESSONS").style.display = "none";
    document.getElementById("ACTIVITIES").style.display = "inline";
    document.getElementById("RATRAC").style.display = "none";
    document.getElementById("PAISATGE").style.display = "inline";
		document.getElementById("RIDER").style.display = "inline";
		document.getElementById("SOLDEU").style.display = "inline";
		document.getElementById("ABARSET1").style.display = "none";
    document.getElementById("RESTAURACIO1").style.display = "none";
    document.getElementById("SKI").style.display = "inline";
    document.getElementById("CABANYA1").style.display = "none";
    document.getElementById("ACTIVITATS1").style.display = "none";
    document.getElementById("PAS").style.display = "inline";
		document.getElementById("ALIGA1").style.display = "none";
		document.getElementById("PESSONS1").style.display = "none";
    document.getElementById("ACTIVITIES").style.display = "inline";
    document.getElementById("RATRAC1").style.display = "none";
    document.getElementById("PAISATGE").style.display = "inline";
  }
  if (randomNumber == 11) {
		document.getElementById("RIDER").style.display = "none";
		document.getElementById("SOLDEU").style.display = "none";
		document.getElementById("ABARSET").style.display = "none";
    document.getElementById("RESTAURACIO").style.display = "none";
    document.getElementById("SKI").style.display = "inline";
    document.getElementById("CABANYA").style.display = "inline";
    document.getElementById("ACTIVITATS").style.display = "inline";
    document.getElementById("PAS").style.display = "inline";
		document.getElementById("ALIGA").style.display = "inline";
		document.getElementById("PESSONS").style.display = "inline";
    document.getElementById("ACTIVITIES").style.display = "none";
    document.getElementById("RATRAC").style.display = "none";
    document.getElementById("PAISATGE").style.display = "none";
		document.getElementById("RIDER1").style.display = "none";
		document.getElementById("SOLDEU1").style.display = "none";
		document.getElementById("ABARSET1").style.display = "none";
    document.getElementById("RESTAURACIO1").style.display = "none";
    document.getElementById("SKI").style.display = "inline";
    document.getElementById("CABANYA").style.display = "inline";
    document.getElementById("ACTIVITATS").style.display = "inline";
    document.getElementById("PAS").style.display = "inline";
		document.getElementById("ALIGA").style.display = "inline";
		document.getElementById("PESSONS").style.display = "inline";
    document.getElementById("ACTIVITIES1").style.display = "none";
    document.getElementById("RATRAC1").style.display = "none";
    document.getElementById("PAISATGE1").style.display = "none";
	}
}


cards.forEach(card => card.addEventListener('click', flipCard));


//*Set time & reset*//
var timerText = document.getElementById('timer-text');

var btnStart = document.getElementById('btn-start');

let countTime = 0;

var stop = btnStart.addEventListener("click", function(){
  if(timerText.textContent !== "none"){
  setInterval(function(){
        countTime += 1;
        timerText.textContent = countTime + " seg.";
        btnStart.textContent = "RESET";
        if(btnStart.textContent === "RESET"){
          btnStart.addEventListener("click", function(){
            location.reload();
          });
        }
    }, 1000); 
  }
});


//*Count moves*//
const moveText = document.getElementById('move');

const play = document.getElementById('start');

let counterMove = 0;

play.addEventListener("click", function(){
  if(hasFlippedCard === true){
  counterMove+= 1;
  moveText.textContent = counterMove + " mov";
  }
});


//* Start play with card *//
var click = 0;
var stopAndPlay = play.addEventListener("click", function(){
  if(timerText.textContent !== "none"){
  if(click === 0){
  setInterval(function(){
    click += 1;
    countTime += 1;
        timerText.textContent = countTime + " seg.";
        btnStart.textContent = "RESET";
        if(btnStart.textContent === "RESET"){
          btnStart.addEventListener("click", function(){
            location.reload();
          });
        }
    }, 1000);
  }
  click++;
  }
});