const gridBorder = document.querySelector("#grid-border");

const gridContainer = document.createElement('div');
gridContainer.setAttribute('id', 'grid-container');
gridBorder.appendChild(gridContainer);

const square = document.createElement('div');
square.setAttribute('class', 'square');

const btn = document.querySelector("button");
btn.addEventListener("click", gridChange, false);

const blackBtn = document.querySelector("#black");
blackBtn.addEventListener("click", selectedColorBlack, false);

const eraserBtn = document.querySelector("#eraser");
eraserBtn.addEventListener("click", selectedColorEraser, false);

const rainbowBtn = document.querySelector("#rainbow");
rainbowBtn.addEventListener("click", selectedColorRainbow, false);


function selectedColorBlack(){
    selectedColor = 1;
    colorSquares();
}

function selectedColorEraser(){
    selectedColor = 2;
    colorSquares();
}

function selectedColorRainbow(){
    selectedColor = 3;
    colorSquares();
}

//Determines the size of the grid
let gridSize = 10;


function gridCreate(){
    gridContainer.setAttribute("style", `grid-template-columns: repeat(${gridSize},1fr); grid-template-rows: repeat(${gridSize},1fr);`);
}


function gridChange(){
    gridSize = prompt("Change the grid size, choose a number between 1 and 100");
    if(gridSize > 100 || gridSize <= 0 || isNaN(gridSize)){
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

selectedColor = 1;

rainbowColorsArray = ["#fbf8cc", "#fde4cf", "#ffcfd2", "#f1c0e8", "#cfbaf0", "#a3c4f3", "#90dbf4", "#8eecf5", "#98f5e1", "#b9fbc0"];
rainbowColorNow = 0;

function colorSquares(){
    for (let i = 0 ; i < squares.length; i++) {
        if(selectedColor === 1){
        squares[i].addEventListener("mouseover", colorBackgroundBlack, false);
        function colorBackgroundBlack()
        {  
            squares[i].setAttribute("style", "background-color:black;");
        }
        } else if (selectedColor === 2){
            squares[i].addEventListener("mouseover", colorBackgroundWhite, false);
            function colorBackgroundWhite()
            {  
                squares[i].setAttribute("style", "background-color:white;");
            }
        } else if (selectedColor === 3){
            squares[i].addEventListener("mouseover", colorBackgroundRainbow, false);
            function colorBackgroundRainbow()
            {  
                squares[i].setAttribute("style", `background-color:${rainbowColorsArray[rainbowColorNow]};`);
                rainbowColorNow++;
                if(rainbowColorNow > rainbowColorsArray.length - 1){
                    rainbowColorNow = 0;
                }
            }
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