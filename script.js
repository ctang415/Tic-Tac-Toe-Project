const Gameboard = (() => {
    const gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
    return {
        gameBoard
    }
})();

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

/*
const button = document.getElementById('button')

button.addEventListener('click', function() {
    const nameOne = document.getElementById('nameA')
    const nameTwo = document.getElementById('nameB')

})
*/



const displayController = (() => {
    var currentPlayer = playerOne;
    const switchPlayer = () => {
        if (currentPlayer == playerOne) {
            playerOne.makeMove();
            currentPlayer = playerTwo;
        }
        else {
            playerTwo.makeMove();
            currentPlayer = playerOne;
        }
    }
    return {switchPlayer}
})();




displayController.switchPlayer();