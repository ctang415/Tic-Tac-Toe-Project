const Gameboard = (() => {
    return {
        gameBoard: [" ", " ", " ", " ", " ", " ", " ", " ", " "]
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
const nameOne = document.getElementById(nameA)
const nameTwo = document.getElementById(nameB)


const playerOne = Player(nameOne, 'X')
const playerTwo = Player(nameTwo, 'O')


const displayController = (() => {
    var currentPlayer = playerOne;
    const switchPlayer = () => {
        if (currentPlayer == playerOne) {
            playerOne.makeMove();
            console.log(currentPlayer)
            currentPlayer = playerTwo;
            console.log(currentPlayer)
        }
        else {
            playerTwo.makeMove();
            currentPlayer = playerOne;
        }
    }
    return {switchPlayer}
})();




