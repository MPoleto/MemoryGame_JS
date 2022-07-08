const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let firstCard, secondCard;
let lockBoard = false;

const selectors = {
    boardContainer: document.querySelector('.board-container'),
    moves: document.querySelector('.moves'),
    timer: document.querySelector('.timer'),
    start: document.querySelector('button'),
    win: document.querySelector('.win')
}
const state = {
    gameStarted: false,
    totalFlips: 0,
    totalTime: 0,
    loop: null
}

selectors.start.addEventListener('click', startGame);

cards.forEach((card) => { card.addEventListener('click', flipCard)});

(function shuffle() {
    cards.forEach((card) => {
        let randomPosition = Math.floor(Math.random() * 18);
        card.style.order = randomPosition;
    })
})();

function startGame() {
    state.gameStarted = true;
    selectors.start.classList.add('disabled');
    
    state.loop = setInterval(() => {
        state.totalTime++;
        
        selectors.moves.innerHTML = `Clicks: ${state.totalFlips}`;
        selectors.timer.innerHTML = `Tempo: ${state.totalTime}s`;
        
        selectors.start.removeEventListener('click', startGame);
        
    }, 1000)
}

function flipCard() {
    if(lockBoard) return;
    if(this === firstCard) return;
    
    if(!state.gameStarted) startGame();
        
    state.totalFlips++;
    this.classList.add('flipped');

    if(!document.querySelectorAll('.card:not(.flipped)').length) {
        setTimeout(() => {
            selectors.boardContainer.classList.add('flipped');
            selectors.win.classList.add('win-box');
            selectors.moves.style.opacity = "0";
            selectors.timer.style.opacity = "0";
            selectors.win.innerHTML = `
            <h2 class="win-text"> PARABÉNS!!!</h2> <br />
            <p class="highlight">VOCÊ VENCEU<br />
            em ${state.totalTime} segundos<br />
            e com  ${state.totalFlips} clicks</p>
            `
            clearInterval(state.loop)
        },800)
    }
        
    if(!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }
    secondCard = this;
    hasFlippedCard = false;
    checkForMatch();
}

function checkForMatch() {
    if(firstCard.dataset.card === secondCard.dataset.card) {
        disableCards();
        return;
    }
    unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove('flipped');
        secondCard.classList.remove('flipped');

        resetBoard();
    }, 800);
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

