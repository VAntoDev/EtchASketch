const gridBorder = document.querySelector("#grid-border");

const gridContainer = document.createElement('div');
gridContainer.setAttribute('id', 'grid-container');
gridBorder.appendChild(gridContainer);

const square = document.createElement('div');
square.setAttribute('class', 'square');

const btn = document.querySelector("button");
btn.addEventListener("click", gridChange, false);

//Determines the size of the grid
let gridSize = 10;


function gridCreate(){
    gridContainer.setAttribute("style", `grid-template-columns: repeat(${gridSize},1fr); grid-template-rows: repeat(${gridSize},1fr);`);
}


function gridChange(){
    gridSize = prompt("Change the grid size, choose a number between 1 and 100");
    if(gridSize > 100 || gridSize <= 0){
        alert("The number must be between 1 and 100 ")
    } else {
    
    removeAllSquares();

    squaresCreate(gridSize)

    gridCreate();

    colorSquares();
    }
}

//Creates the cells
function squaresCreate(gridSize){
for(i = 0; i < gridSize**2; i++){
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    gridContainer.appendChild(square);
}
}

//Makes the cells turn green when the mouse is over them
let squares = document.getElementsByClassName("square");


function colorSquares(){
    for (let i = 0 ; i < squares.length; i++) {
        squares[i].addEventListener("mouseover", colorBackground, false);
        function colorBackground()
        {  
            squares[i].setAttribute("style", "background-color:black;");
        }
    }
}

function removeAllSquares(){
    let elementGridContainer = document.getElementById('grid-container');
    var count = elementGridContainer.childElementCount;
    for (let i = 0 ; i < count; i++) {
        gridContainer.removeChild(gridContainer.firstElementChild)
    }
}

gridCreate();

squaresCreate(gridSize);

colorSquares();