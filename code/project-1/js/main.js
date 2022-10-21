let simonOrder = [];
let playerOrder = [];
let blink;
let level;
let playerTurn;
let correctOrder;
let simonTurn;
let intervalId;
let win;

const blocks = document.querySelectorAll('.blocks');
const back1 = document.querySelector ('.blockBack1');
const back2 = document.querySelector ('.blockBack2');
const back3 = document.querySelector ('.blockBack3');
const back4= document.querySelector ('.blockBack4');
const blockBacks = [back1, back2, back3, back4]
const startButton = document.querySelector('#start');
const resetButton = document.querySelector ('#reset')
const hardButton = document.querySelector('#hard')

hardButton.addEventListener('click', (event) => {
    if (hardButton.clicked === true) {
        hard = true;
    } else {
        strict = false;
    }
})
resetButton.addEventListener('click', (event) => {
    if (resetButton.clicked === true) {
        start = true;
    } else {
        start = false;
        clearInterval(intervalId);
    }
})      

startButton.addEventListener('click', (event) => {
    if (reset || win) {
        play();
    }
})

function play() {
win = false;
order = [];
playerOrder = [];
blink = 0;
intervalId = 0;
turn =1;
correct = true;
for (var i = 0; i < 20; i++)
    simonOrder.push(Math.floor(Math.random() * 4) +1);
  simonTurn =true;

  intervalId = setInterval(gameTurn, 1000);
}

function gameTurn () {
    reset = false;

    if (blink == turn) {
        clearInterval(intervalId);
        simonTurn = false;
        clearColor();
        reset = true; 
    }

    if (simonTurn) {
        clearColor();
        setTimeout(() => {
            if (simonOrder[blink] === 1) red();
            if (simonOrder[blink] === 2) blue();
            if (simonOrder[blink] === 3) yellow();
            if (simonOrder[blink] === 4) green();
            blink++;
        }, 300);
    }
}

function red() {
    back1.style.backgroundColor = 'pink';
}
function blue(event) {
    back2.style.backgroundColor = 'cyan';
}
function yellow(event) {
    back3.style.backgroundColor = 'white';
}
function green(event) {
    back4.style.backgroundColor = 'lime';
}

function clearColor () {
    back1.style.backgroundColor = 'red';
    back2.style.backgroundColor = 'blue';
    back3.style.backgroundColor = 'yellow';
    back4.style.backgroundColor = 'green';
}


