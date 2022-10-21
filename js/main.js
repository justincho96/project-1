let simonOrder = []
let playerOrder = []
let blink
let level
let playerTurn
let correctOrder
let simonTurn
let intervalId
let win

const blocks = document.querySelectorAll('.blocks')
const back1 = document.querySelector ('.blockBack1')
const back2 = document.querySelector ('.blockBack2')
const back3 = document.querySelector ('.blockBack3')
const back4= document.querySelector ('.blockBack4')
const blockBacks = [back1, back2, back3, back4]
const startButton = document.querySelector('#start')
const resetButton = document.querySelector ('#reset')
const hardButton = document.querySelector('#hard')
const levelText = document.querySelector('.stage')

hardButton.addEventListener('click', (event) => {
    if (hardButton.clicked === true) {
        hard = true;
    } else {
        strict = false;
    }
})

resetButton.addEventListener('click', (event) => {
    if (resetButton.clicked === true) {
        start = true
    } else {
        start = false;
        clearInterval(intervalId)
    }
})   

startButton.addEventListener('click', (event) => {
    if (reset || win) {
        play()
    }
})

function play() {
win = false
simonOrder = []
playerOrder = []
blink = 0
intervalId = 0
level = 1
levelText.innerHTML = 'Stage 1'
correctOrder = true;
for (let i = 0; i < 4; i++) {
    simonOrder.push(Math.floor(Math.random() * 4) + 1)
    console.log(simonOrder)
}
   simonTurn = true

  intervalId = setInterval(gameTurn, 1000)
}

function gameTurn() {
    reset = false

    if (blink == level) {
        clearInterval(intervalId)
        simonTurn = false
        clearColor()
        reset = true
    }

    if (simonTurn) {
        clearColor()
        setTimeout(() => {
            if (simonOrder[blink] === 1) red()
            if (simonOrder[blink] === 2) blue()
            if (simonOrder[blink] === 3) yellow()
            if (simonOrder[blink] === 4) green()
            blink++
        }, 300)
    }
}

function red() {
    back1.style.backgroundColor = 'pink'
}
function blue() {
    back2.style.backgroundColor = 'cyan'
}
function yellow() {
    back3.style.backgroundColor = 'white'
}
function green() {
    back4.style.backgroundColor = 'lime'
}

function clearColor () {
    back1.style.backgroundColor = 'red'
    back2.style.backgroundColor = 'blue'
    back3.style.backgroundColor = 'yellow'
    back4.style.backgroundColor = 'green'
}

function flashColor () {
    back1.style.backgroundColor = 'pink'
    back2.style.backgroundColor = 'cyan'
    back3.style.backgroundColor = 'white'
    back4.style.backgroundColor = 'lime'
}

back1.addEventListener('click', (event) => {
    if (reset) {
        playerOrder.push(1)
        check()
        red()
        if(!win) {
            setTimeout(() => {
                clearColor();
            }, 300)
        }
    }
})

back2.addEventListener('click', (event) => {
    if (reset) {
        playerOrder.push(2);
        check()
        blue()
        if(!win) {
            setTimeout(() => {
                clearColor()
            }, 300)
        }
    }
})

back3.addEventListener('click', (event) => {
    if (reset) {
        playerOrder.push(3);
        check()
        yellow()
        if(!win) {
            setTimeout(() => {
                clearColor()
            }, 300)
        }
    }
})

back4.addEventListener('click', (event) => {
    if (reset) {
        playerOrder.push(4)
        check()
        green()
        if(!win) {
            setTimeout(() => {
                clearColor();
            }, 300)
        }
    }
})

function check () {
    if (playerOrder[playerOrder.length - 1] !== simonOrder[playerOrder.length - 1])
    
    correctOrder = false

    if (playerOrder.length == 4 && correctOrder) {
        beatSimon()
    }

    if (correctOrder == false) {
        flashColor()
        levelText.innerHTML ='You Lose! Try again'
        setTimeout(() => {
            levelText.innerHTML = level
            clearColor()

            if(hard) {
                play()
            } else {
                simonTurn = true
                blink = 0
                playerOrder = []
                correctOrder = true
                intervalId = setInterval(gameTurn, 1000)
            }
        }, 600)

    } 

    if (level == playerOrder.length && correctOrder && !win) {
    level++
    playerOrder = []
    simonTurn = true
    blink = 0
    intervalId = setInterval(gameTurn, 1000)
  }
    
}

function beatSimon() {
    flashColor()
    reset = false
    win = true
    levelText.innerHTML ='You Win!'
}