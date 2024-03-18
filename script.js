let gridSpaces = document.querySelectorAll(".board-space")
let board = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
let playerTurn = 0;

//click on grid - place piece
gridSpaces.forEach(grid => {
    grid.addEventListener("click", () => {
        if(grid.childNodes.length === 0) {
        
            let playerPiece = ""
            const tempPiece = document.createElement("p")
            
            if(playerTurn === 0) {
                playerPiece = "X"
                tempPiece.setAttribute("class", "x-piece")
                playerTurn++
            } else {
                playerPiece = "O"
                tempPiece.setAttribute("class", "o-piece")
                playerTurn--
            }

            index = Array.from(gridSpaces).indexOf(grid)
            board[Math.floor(index/3)][index%3] = playerPiece
            tempPiece.textContent = playerPiece
            grid.appendChild(tempPiece)
            
            //There is a winner
            if(checkWinner() !== -1) {
                resultScreen()
            }
        }
    })
})

//check winner
const checkWinner = () => {
    //ROWS
    for (let i = 0; i < 3; i++) {
        if(board[i][0] !== 0 && board[i][0] == board[i][1] && board[i][0] == board[i][2]) {
            return board[i][0]
        }
    }

    //COLUMNS
    for (let i = 0; i < 3; i++) {
        if(board[0][i] !== 0 && board[0][i] == board[1][i] && board[0][i] == board[2][i]) {
            return board[0][i]
        }
    }

    //DIAGONAL
    if(board[0][0] !== 0 && board[0][0] === board[1][1] && board[0][0] == board[2][2]) {
        return board[0][0]
    }
    else if(board[0][2] !== 0 && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
        return board[0][2]
    }

    return -1
}

//Displays result screen
const resultScreen = () => {
    let results = document.querySelector(".result-screen")
    results.style.display = "block";
    
}
