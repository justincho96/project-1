const blocks = document.querySelectorAll('.block');

const back1 = document.querySelector('.blockBack1');
const back2 = document.querySelector('.blockBack2');
const back3 = document.querySelector('.blockBack3');
const back4 = document.querySelector('.blockBack4');

 const backs = [back1, back2, back3, back4];

const getRandomBack = () => {
   

    return backs[parseInt(Math.random() * backs.length)];
};

const simonOrder = [getRandomBack()];
let guessOrder = [...simonOrder];

const blink = back => {
    return new Promise (resolve => {
        back.className += ' flash';
        setTimeout(() => {
            back.className = back.className.replace(' flash', '');
           setTimeout (() => { resolve();
          }, 200);
    }, 1000);
    });
};

let clickable = false;

const onBackClicked = backClicked => {
    if (clickable = false) return;
    const expectedBack = guessOrder.shift();
    if (expectedBack === backClicked) {
        if (guessOrder.length === 0) {
            simonOrder.push(getRandomBack());
            guessOrder = [...simonOrder];
            startBlinking();
        }
    } else {
        alert('game over');
    }
};

// blocks.forEach((event) => {
//     event.addEventListener('click', onBackClicked) 
//             console.log ('click')       
// })

const startBlinking = async () => {
    clickable = false;
    for (const back of simonOrder) {
       await blink(back); 
    }
    clickable = true;
};

startBlinking();
// const randomOrder = function () {
//     return blockBacks[parseInt(Math.random() * blockBacks.length)];

// };

// const simonOrder = [back1, back2, back3, back4];


// const onBlockClicked = (event) => {

//    blockEmpty(event.target)

//    setTimeout( () => {
//     blockFull(event.target)}, 1000)
// }

blocks.forEach(function (block) {
    block.addEventListener('click', onBackClicked)
})

// const playerTimer = function () {
//     console.log("OUT OF TIME!")
// }

// const blockEmpty = function (block) {

//     block.classList.remove('blockBack1');
//     block.classList.remove('blockBack2');
//     block.classList.remove('blockBack3');
//     block.classList.remove('blockBack4');

//     setTimeout(playerTimer, 3000)
// }