const Gameboard = (() => {
    return {
        gameBoard: [" ", " ", " ", " ", " ", " ", " ", " ", " "]
    }
})();

/*
const DisplayController = (() => {
    return {

    }
})();
*/

const Player = (name, symbol) => {
    var squares = document.querySelectorAll('.square');
    const makeMove = () => 
        squares.forEach((square) => { 
        square.addEventListener('click', function() {
        square.textContent = `${symbol}`;
        Gameboard.gameBoard[square.dataset.id] = `${symbol}`;
        })
    })
        return {name, symbol, makeMove}
};

const playerOne = Player('One', 'X')
const playerTwo = Player('Two', 'O')

playerTwo.makeMove();
