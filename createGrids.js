const container = document.querySelector(".grid-container");

function createRows(row, column){
    container.style.setProperty('--grid-rows', row);
    container.style.setProperty('--grid-cols', column);
    for(let i = 0; i < (row * column); i++){
        const cell = document.createElement('div');
        cell.classList.add('grid-item');
        cell.innerText="aa";
        container.appendChild(cell);
    }
}

createRows(16, 16);