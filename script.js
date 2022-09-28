const Gameboard = (() => {
    const gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
    const checkWin = () => {
        if ((gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[1] != " ") ||
        (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[4] != " ") || 
        (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[6] != " ") ||
        (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[5] != " ") ||
        (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[4] != " ") ||
        (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[4] != " ") ||
        (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[4] != " ") ||
        (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[7] != " "))
            window.alert(`Game is over. ${displayController.currentPlayer.name} wins.`)
            else if (gameBoard.every(notEmpty)) {
                window.alert(`It's a tie.`)
            }
        }
        const notEmpty = (index) => {
            return index != " "
        }
    const resetGame = () => {
        gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
    }
    return {
        gameBoard, checkWin, resetGame
    }
})();


const Player = (name, symbol) => {
        return {name, symbol}
};


/*
const button = document.getElementById('button')

button.addEventListener('click', function() {
    const nameOne = document.getElementById('nameA')
    const nameTwo = document.getElementById('nameB')

})

        [0, 1, 2], [0, 4, 8], [0, 3, 6], [2, 5, 8], [2, 4, 6],
        [1, 4, 7], [3, 4, 5], [6, 7, 8]
*/


const displayController = (() => {
    const playerOne = Player('Player One', 'X')
    const playerTwo = Player('Player Two', 'O')
    var currentPlayer = playerOne;
    const makeMove = () => {
            var squares = document.querySelectorAll('.square');
            squares.forEach((square) => { 
            square.addEventListener('click', function() {
                if(!square.textContent) {
                    square.textContent = currentPlayer.symbol;
                    Gameboard.gameBoard[square.dataset.id] = currentPlayer.symbol;
                    console.log('clicked')
                    Gameboard.checkWin();
                }
            })
            
        })
    }
    const switchPlayer = () => {
        if (currentPlayer.symbol === 'X') {
             currentPlayer = playerTwo;
        }
        else if (currentPlayer.symbol === 'O') {
             currentPlayer = playerOne;
        }
    }
    const endGame = () => {
        if (Gameboard.checkWin()) {
            var squares = document.querySelectorAll('.square')
            squares.forEach((square) => { 
                square.removeEventListener('click', function() {
        })
    })
}
    }
            return {makeMove, switchPlayer, currentPlayer, endGame}
})();


const Gameflow = (() => {
    const play = () => {
        var squares = document.querySelectorAll('.square');
        squares.forEach((square) => { 
        square.addEventListener('click', function() {
            if(!square.textContent) {
                displayController.makeMove();
                displayController.switchPlayer();
                console.log('hey')
            }
        })
        })
    }
    return {
        play
    }
})();

Gameflow.play();
