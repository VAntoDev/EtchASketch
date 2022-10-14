const gridContainer = document.querySelector("#grid-container")

const square = document.createElement('span')
square.setAttribute('class', 'square');

for(i = 0; i < 16; i++){
    const square = document.createElement('span')
    square.setAttribute('class', 'square'); 
    gridContainer.appendChild(square);
}



