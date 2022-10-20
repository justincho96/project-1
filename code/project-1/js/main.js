const blocks = document.querySelectorAll('.block');

const back1 = document.querySelector('.blockBack1');
const back2 = document.querySelector('.blockBack2');
const back3 = document.querySelector('.blockBack3');
const back4 = document.querySelector('.blockBack4');

const blockBacks = [back1, back2, back3, back4];

const randomOrder = function () {
    return blockBacks[parseInt(Math.random() * blockBacks.length)];

};

const simonOrder = [back1, back2, back3, back4];


// const onBlockClicked = function (event) {

//    blockEmpty(event.target)

//    setTimeout(function () {
//     blockFull(event.target)}, 1000)
// }

// blocks.forEach(function (block) {
//     block.addEventListener('click', onBlockClicked)
// })

// const playerTimer = function () {
//     console.log("OUT OF TIME!")
// }

// const blockEmpty = function (block) {

//     block.classList.remove('blockBack1')
//     block.classList.remove('blockBack2')
//     block.classList.remove('blockBack3')
//     block.classList.remove('blockBack4')

//     setTimeout(playerTimer, 3000)
// }


// const blockFull = function (block) {
//     if (blocks.innerText === "1") {
//         block.classList.add('blockBack')
// } else {
//     if (block.classList.add === "2") {
//         block.classList.add('blockBack2')
// } else {
//     if (blocks.innerText === "3") {
//     block.classList.add('blockBack3')
// }}}}

const blink = (function (blockBacks) {
    return new Promise ((resolve, reject), function () {
        blockBacks.className += ' flash';
        setTimeout( function(block) {
            blockBacks.className = panel.className.replace(' flash', '');
            resolve();
        }, 1000);
    });
})

const timing = async function asyncTiming() {
    for (const blockBack of simonOrder) {
       const response = await blink(blockBack); 
    };
};