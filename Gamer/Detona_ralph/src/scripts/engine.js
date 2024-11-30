const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector("enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
    },

    values: {
        timeId: null,
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        curretTime: 60,
    },
    actions: {
        countDownTimeId: setInterval(countDown, 1000),
    }
};

function playSound(){
    let audio = new Audio("./src/audios/hit.m4a");
    audio.play();
}

function countDown(){
    state.values.curretTime--;
    state.view.timeLeft.textContent = state.values.curretTime;

    if (state.values.curretTime <= 0){
        clearInterval(state.actions.countDownTimeId);
        clearInterval(state.values.timeId);
        alert("Gamer Over! O seu resultado foi: " + state.values.result);
    }
}

function randomSquare(){
    state.view.squares.forEach((square) => {
        square.classList.remove("enemy");
    });

    let randamNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randamNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
}

function moveEnemy(){
    state.values.timeId = setInterval(randomSquare, state.values.gameVelocity)
}

function addListenerHitBox(){
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if(square.id === state.values.hitPosition){
                state.values.result++
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
                playSound();
            }
        });
    });
}

function init() {
    moveEnemy(),
    addListenerHitBox();
}


init();
