const container = document.querySelector(".grid-container");
const old_html = $(".grid-container").html();

let output = document.getElementById('value-output')
let slider = document.getElementById('sizeRange');
let newGridValue = output.innerHTML = slider.value;
newGridValue = slider.oninput =  function () { output.innerHTML = this.value};

function getGridValue () {
    return document.getElementById('sizeRange').value;
}



function createRows(row, column){
    container.style.setProperty('--grid-rows', row);
    container.style.setProperty('--grid-cols', column);
    for(let i = 0; i < (row * column); i++){
        const cell = document.createElement('div');
        cell.classList.add('grid-item');
        container.appendChild(cell);
        cell.addEventListener('mouseover', e => {
            cell.style.backgroundColor = 'black';
        })
        cell.setAttribute('style', 'border: 1px solid black')
    }
}

function updateDiv() {
    $(".grid-container").html(old_html);
}

createRows(16, 16);