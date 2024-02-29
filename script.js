const Board = (function(){
    const BOARDSIZE = 3;
    let turncounter = 0;
    const board = [];

    function createCleanBoard(){
        for (let i=0; i < BOARDSIZE; i++) {
            let emptyArray = []
            for (let j=0; j < BOARDSIZE; j++){
                emptyArray[j] = '';
            }
            board.push(emptyArray);
        }
        return
    }

    function CheckWin() {
        if (board[1][1]!='' && (board[0][0] === board[1][1] && board[1][1] === board[2][2] || board[2][0] === board[1][1] && board[1][1]=== board[0][2]))
            {console.log("diagonal win")}
        else {console.log("no diagonal win")}
        for(let i= 0; i < BOARDSIZE; i++){
            if (board[i][2] != '' && board[i][0] === board[i][1] && board[i][1]=== board[i][2]|| board[i][2] != ''&& board[0][i] === board[1][i] && board[1][i] === board[2][i])
            {console.log("straught win")}
            else {console.log("no straight win")}
        }
        return console.log("function has run")
    }

    function PlayTurn(playerChoice, playerToken) {

        if (board[playerChoice.at(0)][playerChoice.at(1)] === '') {
            board[playerChoice.at(0)][playerChoice.at(1)] += playerToken;
            turncounter += 1}
        else {
            console.log("invalid move, choose a valid field")
        }

        return
    }

    function GetBoard(){
        return board
    }
    return {createCleanBoard, CheckWin, PlayTurn, GetBoard}
})();


const Player = (function(){
    function CreatePlayer(name, token){
        let turnStatus = false;
        let itsMyTurn = false;
        const InvalidMove = () => console.log(`Player ${name}, invalid move`);
        const toggleStatus = function() {turnStatus = !turnStatus}
        const getStatus = () => turnStatus;
        
        return {name, token, toggleStatus, InvalidMove, getStatus}
    }

    function SetStartPlayer(player1, player2){
        
        (Math.random() > 0.5) ? player1.toggleStatus() : player2.toggleStatus()
        
        return
    }

    function SetActivePlayer(player1, player2){
        if (player1.getStatus()) {
            player2.toggleStatus
            console.log("its player 1 turn")
        }
        else {
            player1.toggleStatus
            console.log("its player 2 turn")
        }
    }

    return {CreatePlayer,SetActivePlayer, SetStartPlayer}
})();

function updateScreen(){
    const box = document.querySelector(".box")
    const board = Board.GetBoard()
    const itemsInBoard = board.length;
    
    if (!box.firstElementChild){
        for (let i=0; i < itemsInBoard; i++){
            for (let j=0; j < itemsInBoard; j++){
                const button = document.createElement("button")
                button.innerText = `${board[i][j]}`
                button.classList.add('cell')
                button.setAttribute("data-element", `${i}+${j}`)
                box.appendChild(button)
            }   
        }
    }
    return
}

function addUpdater() {
    const allCells = document.querySelectorAll(".cell")
    allCells.forEach(node => node.addEventListener("click", () => updateScreen()))
    return
}


const startGameBtn = document.querySelector(".startgame")
startGameBtn.addEventListener("click", function(){ 
    updateScreen(),
    addUpdater()
})
/* const allCells = document.querySelectorAll(".cell")
allCells.forEach(node => node.addEventListener("click", () => updateScreen())) */




/* let array1 = ["a","b","c"]
array1.push([1,2,3])
console.log(array1)
console.log(array1.length)
console.log(array1.flat().length)
console.log(array1.flat());
 */
Board.createCleanBoard()
console.table(Board.GetBoard())
Board.PlayTurn("12","O")
console.table(Board.GetBoard()) 
