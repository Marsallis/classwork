
// const randColorRGB = () => {
//     const red = Math.floor(Math.random() * 255);
//     const green = Math.floor(Math.random() * 255);
//     const blue = Math.floor(Math.random() * 255);
//     return `rgb(${red}, ${green}, ${blue})`;
// }


const generateGrid = (numberOfSquares) => {
    for (let i = 0; i <= numberOfSquares; i++) {
        const $square = $('<div>').addClass('square');
        $square.css('background-color', 'red');
        $square.text(i);
        $('body').append($square);
    }
}

$(() => {
    console.log("hello world");

    generateGrid(64);

});