const blocks = document.querySelectorAll('.block')

blocks.forEach(function (block){
    block.addEventListener('click', onBlocksClicked)

    function onBlocksClicked(event)
    console.log('clicked');
})