function left() {
    const blueColumn = document.querySelector('.blue');
    const greenColumn = document.querySelector('.green');
    blueColumn.style.width = '100%';
    greenColumn.style.width = '30px';
}

function both() {
    const blueColumn = document.querySelector('.blue');
    const greenColumn = document.querySelector('.green');
    blueColumn.style.width = '50%';
    greenColumn.style.width = '50%';
}

function right() {
    const blueColumn = document.querySelector('.blue');
    const greenColumn = document.querySelector('.green');
    blueColumn.style.width = '30px';
    greenColumn.style.width = '100%';
}