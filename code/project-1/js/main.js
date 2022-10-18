const blocks = document.querySelectorAll('.block');

// console.log(block);

// block.addEventListener('click', function () {
// console.log('clicked')
// })









const onBlockClicked = function (event) {
    console.log('click')
}
// block.addEventListener('click', onBlockClicked())

blocks.forEach(function (block) {
    block.addEventListener('click', onBlockClicked)
})