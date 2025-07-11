
const container = document.querySelector("#grid");

function makeGrid(squares) {
    let cellSize = (960 / squares);
    for (let i = 0; i < (squares*squares); i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.style.width = `${cellSize}px`;
    cell.style.height = `${cellSize}px`;
    container.appendChild(cell);
    cell.addEventListener("mouseover", () => {
    cell.style.backgroundColor = getRandomColor();
    setTimeout(() => {
        cell.style.backgroundColor = "black";
    }, 700);
}
);
}

}



function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getSquares() {
    
    let squares = prompt("How many sqaures per side", "16");
    squares = squares || 16;
    const container = document.getElementById("grid");
    container.innerHTML = ""; 
    makeGrid(squares);

}

