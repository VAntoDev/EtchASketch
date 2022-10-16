const gridContainer = document.querySelector("#grid-container")

const square = document.createElement('span')
square.setAttribute('class', 'square');


for(i = 0; i < 32; i++){
    const square = document.createElement('span')
    square.setAttribute('class', 'square'); 
    gridContainer.appendChild(square);
}


const squares = document.getElementsByClassName("square");

for (let i = 0 ; i < squares.length; i++) {
    squares[i].addEventListener("mouseover", colorBackground, false); 
    function colorBackground()
    {  
        squares[i].setAttribute("style", "background-color:green;")
    }
 }





