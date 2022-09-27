const Gameboard = (() => {
    const gameBoard = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
    return {
        gameBoard
    }
})();
/*
const Player = (name, symbol) => {
    var squares = document.querySelectorAll('.square');
    const makeMove = () => {
        squares.forEach((square) => { 
        square.addEventListener('click', function() {
        square.textContent = `${symbol}`;
        Gameboard.gameBoard[square.dataset.id] = `${symbol}`;
        })
    })
}
        return {name, symbol, makeMove}
};
*/

const Player = (name, symbol) => {
        return {name, symbol}
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
    const makeMove = () => {
            var squares = document.querySelectorAll('.square');
            squares.forEach((square) => { 
            square.addEventListener('click', function() {
                if(!square.textContent) {
            square.textContent = currentPlayer.symbol;
            Gameboard.gameBoard[square.dataset.id] = currentPlayer.symbol;
            console.log('clicked')
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
            return {makeMove, switchPlayer}
})();


const Gameflow = (() => {
    const play = () => {
        var squares = document.querySelectorAll('.square');
        squares.forEach((square) => { 
        square.addEventListener('click', function() {
            if(square.textContent === 'X' || square.textContent === 'O') {
                console.log('clicked')
            }
            else  {
                displayController.switchPlayer()
                displayController.makeMove()
                console.log('clicked')
            }
        })
        })
    }
    return {
        play
    }
})();

Gameflow.play();
