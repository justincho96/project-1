# Whack-a-mole (colors)

## Background
- Gamme Choice: Whack-a-mole
The classic arcarde game of whack-a-mole using colors instead of moles and a pointer instead of a hammer

## Wireframe
![Whack-a-mole wireframe](img/Untitled%20-%20May%2020%2C%202022%2018.48.jpg)

### PseudoCode
```js
function moleHit() {
- did the player hit the mole
- possibly display 'hit'
}

function moleMiss() {
- did the player miss the mole
- possibly display 'miss'
}

function points (){
- give points per mole hit
- maybe bonus points for how fast the mole was clicked on
}

- event element for when the mole is clicked

- store highest points

- set a timer

- add functionality for start, stop, and reset buttons

- decide time intervals between moles popping up

- randomize mole placement

```html

<body>
<h1>Whack-a-Mole!</h1>
    <div class = 'board'>  
        <div data-grid='1' class = 'hole'></div>
        <div data-grid='2'class = 'hole'></div>
        <div data-grid='3'class = 'hole'></div>
        <div data-grid='4'class = 'hole'></div>
        <div data-grid='5'class = 'hole'></div>
        <div data-grid='6'class = 'hole'></div>
        <div data-grid='7'class = 'hole'></div>
        <div data-grid='8'class = 'hole'></div>
        <div data-grid='9'class = 'hole'></div>
        <div data-grid='10'class = 'hole'></div>
        <div data-grid='11'class = 'hole'></div>
        <div data-grid='12'class = 'hole'></div>
    </div>
<div id = 'mole'></div> (maybe multiple different moles)
<button id = 'reset'>reset</button> 
</body>    
```css
.body{

}

h1 {
    
}

.board {
display: grid
grid-template-columns:
grd-template-rows: 
}

#mole {

}

#reset {

}

