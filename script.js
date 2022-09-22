const Gameboard = (() => {
    return {
        gameBoard: []
    }
})();

const DisplayController = (() => {
    return {

    }
})();


const Player = (name, symbol) => {
    const makeMove = () => {
        const squares = document.querySelectorAll('.square');
        squares.forEach((square) => { 
        square.addEventListener('click', function() {
        square.textContent = `$symbol`;
        console.log("it works")
    })
    });
    }
    return {name, symbol, makeMove}
}

const playerOne = Player('One', 'X')
const playerTwo = Player('Two', 'O')


const squares = document.querySelectorAll('.square');
squares.forEach((square) => { 
    square.addEventListener('click', function() {
    square.textContent = "X";
    console.log("it works")
})
});