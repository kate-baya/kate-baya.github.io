  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Whack-a-Mole!")

var cellsArray = document.getElementsByTagName("td")

// console.log(cellsArray)

// var randomNumberKeeper = []
// var randomNumber = Math.floor(Math.random() * 25)

function functionToGetRandomNumber () {
  var randomNumber = Math.floor(Math.random() * 25)
  // randomNumberKeeper[0].push(randomNumber)
  // for (var i = 0; i < randomNumberKeeper.length; i++) {
  //  if (randomNumber != randomNumberKeeper[i]) {
    return randomNumber
  
// }}
};


// var randomIndex = functionToGetRandomNumber()
// var randomCell = cellsArray[randomIndex]

// console.log(randomIndex)

function placeMole() {  
var randomIndex = functionToGetRandomNumber()
var randomCell = cellsArray[randomIndex]  
var mole = document.createElement("img")
mole.setAttribute("src", "chocobo.png")
mole.setAttribute("height", "70")
mole.setAttribute("width", "70")
mole.setAttribute("id", "mole")
randomCell.appendChild(mole)
mole.setAttribute("onclick", "whackedMole()")

}

var moleCount = document.getElementById("moleCount"),
  count = 0;

function whackedMole() {
var deleteMole = document.getElementById('mole')
deleteMole.parentNode.removeChild(deleteMole)  
var audio = new Audio();
audio.src = "chocobo_wark.mp3";
audio.play();

count += 1;
  moleCount.innerHTML = "Whacked Chocobos: " + count;
placeMole()
}

var scoreKeeper = 0

function timer(){
  var sec = 10;
  var timer = setInterval(function(){
      document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
      sec--;
      // if no high score
      if (sec < 0 && scoreKeeper === 0) {
          clearInterval(timer)
          alert("You whacked " + count + " chocobos!")
          var deleteMole = document.getElementById('mole')
          deleteMole.parentNode.removeChild(deleteMole) 
          document.getElementById('highScore').innerHTML='Your high score is: ' + count;
          scoreKeeper = count
          count = 0
      // if high score is beaten    
      } else if (sec < 0 && scoreKeeper < count) {
        clearInterval(timer)
          alert("You whacked " + count + " chocobos!")
          var deleteMole = document.getElementById('mole')
          deleteMole.parentNode.removeChild(deleteMole) 
          document.getElementById('highScore').innerHTML='Your high score is: ' + count;
          scoreKeeper = count
          count = 0
      // if high score isn't beaten    
      } else if (sec < 0 && scoreKeeper > count) {
        clearInterval(timer)
          alert("You whacked " + count + " chocobos!")
          var deleteMole = document.getElementById('mole')
          deleteMole.parentNode.removeChild(deleteMole) 
          count = 0
      }
  }, 1000);
}

function highScore() {
  document.getElementById('highScore').innerHTML='Your high score is: ' + count
}


var timerStartButton = document.getElementById('timerButton')
timerStartButton.setAttribute("onclick", "startGame()")

function startGame() {
  placeMole()
  timer()
}