# tictactoe

Brainstorming:

How does tictactoe work:

2 players, 1 board

Basics

board: 3x3 Matrix, each element-value: empty, token

player actions: play token

background: check win condition


1. Generate Board, use variable size, double loop to build sizexsize Matrix with empty cell values
    -resetGameState: resets every Object to pre First Turn State

2. Decide first turn:
    -setRandomStart: randomly selects 1 player to be able to play this turn
    -turnDecider: enable player to set token, disable other player

3. Turn Action:
    -chooseCell: player clicks on cell, if any cell is empty, player select cell in matrix to set value
        if cell empty, call
             -setCellValue
        if cell non empty, call
             -displayError, chooseCell

4. After Turn Action:
    -checkWin: checks whole board for:
        1. same 3 tokens in 1 row
        2. same 3 tokens in 1 column
        3. same 3 tokens in diagonal ==> (0,0), (0+1,0+1), (0+2, 0+2) or (3,0), (2-1, 0+1), (2-2,0+2) yield same token

        If condition true go to 5.
        Else go to turnDecider

5.  Game End:  
    -gameEnder: Announce winner or draw for Game, disable player actions on board


Bare Bone Basics

dom

create Board
showBoard
user interacts > changed Board
showBoard
