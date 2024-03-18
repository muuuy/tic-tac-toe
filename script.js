let gridSpaces = document.querySelectorAll(".board-space")
const board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let playerTurn = 0;

//click on grid - place piece
gridSpaces.forEach(grid => {
    grid.addEventListener("click", (e, index) => {
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

            tempPiece.textContent = playerPiece
            grid.appendChild(tempPiece)
            board[index] = playerPiece
            checkWinner()
        }
    })
})

//check winner
const checkWinner = () => {
    for(let i = 0; i < board.length; i++) {
        if(i !== 0) {
            
        }
    }
}

//check player turn
