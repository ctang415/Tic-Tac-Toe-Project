const Gameboard = (() => {
    var gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
    const checkWin = () => {
        if ((gameBoard[0] === gameBoard[1] && gameBoard[1] === gameBoard[2] && gameBoard[1] != " ") ||
            (gameBoard[0] === gameBoard[4] && gameBoard[4] === gameBoard[8] && gameBoard[4] != " ") || 
            (gameBoard[0] === gameBoard[3] && gameBoard[3] === gameBoard[6] && gameBoard[6] != " ") ||
            (gameBoard[2] === gameBoard[5] && gameBoard[5] === gameBoard[8] && gameBoard[5] != " ") ||
            (gameBoard[2] === gameBoard[4] && gameBoard[4] === gameBoard[6] && gameBoard[4] != " ") ||
            (gameBoard[1] === gameBoard[4] && gameBoard[4] === gameBoard[7] && gameBoard[4] != " ") ||
            (gameBoard[3] === gameBoard[4] && gameBoard[4] === gameBoard[5] && gameBoard[4] != " ") ||
            (gameBoard[6] === gameBoard[7] && gameBoard[7] === gameBoard[8] && gameBoard[7] != " ")) {
            displayController.declareWinner();
        }
        else if (gameBoard.every(notEmpty)) {
                window.alert(`It's a tie.`)
            }
        }    
    const notEmpty = (index) => {
            return index != " "
    }

    const resetGame = () => {
        for(i=0; i < gameBoard.length; i++) {
            gameBoard[i] = ' ';
        }
        displayController.clearBoard();
        playerOne.name = ''
        playerTwo.name = ''
        document.getElementById('nameA').style.display = 'block'
        document.getElementById('nameB').style.display = 'block'
        document.getElementById('first').textContent = ''
        document.getElementById('second').textContent = ''
        document.getElementById('nameA').value = ' '
        document.getElementById('nameB').value = ' '
        container.style.visibility = 'hidden'
        button.style.display = 'block'
    }

    const reset = document.getElementById('reset')
    reset.addEventListener('click', function() {
    resetGame();
    })

    const container = document.querySelector('.container')
    container.style.visibility = 'hidden'
    const button = document.getElementById('button')
    button.addEventListener('click', function() {
        const nameOne = document.getElementById('nameA').value
        const nameTwo = document.getElementById('nameB').value
        playerOne.name = nameOne;
        playerTwo.name = nameTwo;
        document.getElementById('nameA').style.display = 'none'
        document.getElementById('nameB').style.display = 'none'
        document.getElementById('first').textContent = nameOne;
        document.getElementById('second').textContent = nameTwo;
        console.log(nameOne)
        console.log(nameTwo)
        container.style.visibility = 'visible'
        button.style.display = 'none'
        displayController.makeMove();
})

    return {gameBoard, checkWin, resetGame}
})();


const Player = (name, symbol) => {
        return {name, symbol}
};


const playerOne = Player('Player One', 'X')
const playerTwo = Player('Player Two', 'O')



const displayController = (() => {
    var counter = 0;
    var currentPlayer = playerOne;
    var squares = document.querySelectorAll('.square');
    const makeMove = () => {
            squares.forEach((square) => { 
            square.addEventListener('click', function() {
                if(!square.textContent) {
                    square.textContent = currentPlayer.symbol;
                    Gameboard.gameBoard[square.dataset.id] = currentPlayer.symbol;
                    counter++;
                    console.log(counter)
                    Gameboard.checkWin();
                }
            })
            
        })
    }
    const clearBoard = () => {
        squares.forEach((square) => { 
            square.textContent = ''
        })
    }
    const switchPlayer = () => {
        if(currentPlayer === playerOne && counter === 0)
            currentPlayer === playerOne
        else if (currentPlayer ===  playerOne) {
             currentPlayer = playerTwo;
             console.log(currentPlayer.symbol)
             console.log(currentPlayer)
        }
        else if (currentPlayer === playerTwo) {
             currentPlayer = playerOne;
             console.log(currentPlayer.symbol)
             console.log(currentPlayer)
        }
    }
    const declareWinner = () => {
        if(counter%2 != 0) {
              window.alert(`${playerOne.name} is the winner.`)
              counter = 0
        }
        else {
             window.alert(`${playerTwo.name} is the winner.`)
             counter = 0
        }
    }
            return {makeMove, switchPlayer, declareWinner, clearBoard}
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





