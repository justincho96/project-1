# Simon (colors)

## Background
- Game Choice: Simon says where you need to follow the sequence of colored blocks

## Wireframe
![Simon wireframe](img/Untitled%20-%20May%2020%2C%202022%2018.48.jpg)

### PseudoCode
```js
function correct() {
- did the player hit the correct color
- possibly display something to give positive feedback
}

function wrong() {
- did the player miss the correct sequence
- possibly display 'wrong/incorrect' message
}

function points (){
- give points per corrct color
- maybe bonus points for how fast the sequence was clicked on
}

- event element for when the color is clicked

- store highest points

- set a timer

- add functionality for start, stop, and reset buttons

- decide time intervals between colors popping up

- randomize color placement

- game over pop up
```html

<body>
<h1>Simon Says!</h1>
    <div class = 'board'>  
        <div data-grid='1'class = 'block'></div>
        <div data-grid='2'class = 'block'></div>
        <div data-grid='3'class = 'block'></div>
        <div data-grid='4'class = 'block'></div>
        <div data-grid='5'class = 'block'></div>
        <div data-grid='6'class = 'block'></div>
        <div data-grid='7'class = 'block'></div>
        <div data-grid='8'class = 'block'></div>
        <div data-grid='9'class = 'block'></div>
        <div data-grid='10'class = 'block'></div>
        <div data-grid='11'class = 'block'></div>
        <div data-grid='12'class = 'block'></div>
    </div>
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

#reset {

}

