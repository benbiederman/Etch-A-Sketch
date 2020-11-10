const container = document.querySelector('.container');
const randomColor = document.querySelector('.random');
const blackColor = document.querySelector('.black');
const gridReset = document.querySelector('.reset');
const gridResize = document.querySelector('.resize');
let color = '0, 0, 0'

function etchASketch() {
    //Captures grid size
    let size = prompt("Enter a number between 1 and 100");
    let divSize = (550/size) - 2;

    while(size == 0 || size > 100 || size === null){
        size = prompt("Enter a number between 1 and 100");
    }

    drawGrid(size, divSize);


    const containerItems = document.querySelectorAll('.container div');

    containerItems.forEach((div) => {
        //Draws to the color specified
        div.addEventListener('mouseover', (e) => {
            div.style.backgroundColor = `rgb(${color})`;
        })

        //Clears the grid work space back to white
        gridReset.addEventListener('click', (e) => {
            div.style.backgroundColor = `rgb(255, 255, 255)`;
        })        
    })

    //Creates a random color upon button click
    randomColor.addEventListener('click', (e) => {
        color = colorRandom() + ', ' + colorRandom() + ', ' + colorRandom();
        randomColor.style.backgroundColor = `rgb(${color})`;
    })

    //Makes color turn to black upon click of button
    blackColor.addEventListener('click', (e) => {
        color = '0, 0, 0';
    })
    
    //Refreshes grid upon button click
    gridResize.addEventListener('click', (e) => {
        location.reload();
    })
    
}

etchASketch();


//Function for drawing the grid
function drawGrid(size, dimensions) {

    for(let i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.style.width = `${dimensions}px`;
        div.style.height = `${dimensions}px`;
        container.appendChild(div);
    }
}

function colorRandom() {
    return Math.floor(Math.random() * 255);
}





