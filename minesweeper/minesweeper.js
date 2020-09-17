document.addEventListener('DOMContentLoaded', startGame)

var boardLength = 4
var booleanNum = 4

function selectDifficulty(difficulty, booleanDifficulty) {
  boardLength = difficulty
  booleanNum = booleanDifficulty
  resetBoard()
  return boardLength, booleanDifficulty;
}

function resetBoard () {
  var boardNode = document.getElementsByClassName("board")[0]
  boardNode.innerHTML = ""
  startGame()
}

function startGame () {
  createBoard(boardLength)
  for (var i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
    }
  document.addEventListener("contextmenu", checkForWin)
  document.addEventListener("click", checkForWin)
  
  lib.initBoard()
}

//Audio files
var winAudio = new Audio()
winAudio.src = "cleverGirl_1.wav"

var loseAudio = new Audio()
loseAudio.src = "eaten_1.mp3"

var mark = new Audio()
mark.src = "uncovercell.mp3"

var uncover = new Audio()
uncover.src = "markcell.mp3"

//Global board object
var board = {}

function getRandomBoolean (booleanNum){
  var randomNum = Math.floor((Math.random() * 10) + 1)
  if (randomNum % booleanNum == 0) {
    return true
    } 
    return false
}

function createBoard(boardLength) {
  board.cells = []
  var hidden = true
  for (var row = 0; row < boardLength; row++) {
    for (var col = 0; col < boardLength; col++) {
      const isMine = getRandomBoolean(4)
      board.cells.push({col, row, isMine, hidden})
    }
  }
}

function checkForWin () {
  for (var x = 0; x < board.cells.length; x++) {
    if (board.cells[x].isMine === true && board.cells[x].isMarked === false) {
      return
    } else if (board.cells[x].isMine === false && board.cells[x].hidden === true) {
      return 
    } 
  }  

  lib.displayMessage('You win!')
  winAudio.play()
}

function countSurroundingMines (cell) {
  var count = 0
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  for (var j = 0; j < surrounding.length; j++) {
    
    if (surrounding[j].isMine === true) {
      count++
    }
  }
  return count
}