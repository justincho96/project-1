const blocks = document.querySelectorAll('.block');

const onBlockClicked = function (event) {
    // console.log('click')
    event.target.classList.remove('blockBack')
    event.target.classList.remove('blockBack2')
    event.target.classList.remove('blockBack3')

    setTimeout(playerTimer, 3000)
}
// block.addEventListener('click', onBlockClicked())

blocks.forEach(function (block) {
    block.addEventListener('click', onBlockClicked)
})

const playerTimer = function () {
    console.log("OUT OF TIME!")
}



