  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Dress The Clown!")

var head = document.getElementById("head")
var body = document.getElementById("body")
var shoes = document.getElementById("shoes")

var headCount = 0
var bodyCount = 0
var shoesCount = 0

var bodyPart = 0

var selector = document.getElementById("selector")

function whatAmIChanging() {
  if (bodyPart === 0) {
    selector.innerHTML = "Change head"
  } else if (bodyPart === 1) {
    selector.innerHTML = "Change body"
  } else if (bodyPart === 2) {
    selector.innerHTML = "Change shoes"
  }
}

function changeBodyPartUp () {
  if (bodyPart === 0) {
    bodyPart++
  } else if (bodyPart === 1) {
    bodyPart++
  } else if (bodyPart === 2) {
    bodyPart = 0
  }
  whatAmIChanging()
}

function changeBodyPartDown () {
  if (bodyPart === 2) {
    bodyPart--
  } else if (bodyPart === 1) {
    bodyPart--
  } else if (bodyPart === 0) {
    bodyPart = 2
  }
  whatAmIChanging()
}

//Change Head
function changeHeadUp () {
  var headSrc = "./images/head" + headCount + ".png"
    head.src = headSrc
    if (bodyPart === 0 && headCount < 5) {
      headCount++
    } else if (bodyPart === 0 && headCount === 5) {
      headCount = 0
    }
}

function changeHeadDown () {
  var headSrc = "./images/head" + headCount + ".png"
    head.src = headSrc
    if (bodyPart === 0 && headCount >= 1) {
      headCount--
    } else if (bodyPart === 0 && headCount < 5) {
      headCount = 5
    }
}

//Change body
function changeBodyUp () {
  var bodySrc = "./images/body" + bodyCount + ".png"
    body.src = bodySrc
    if (bodyPart === 1 && bodyCount < 5) {
      bodyCount++
    } else if (bodyPart === 1 && bodyCount === 5) {
      bodyCount = 0
    }
}

function changeBodyDown () {
  var bodySrc = "./images/body" + bodyCount + ".png"
    body.src = bodySrc
    if (bodyPart === 1 && bodyCount >= 1) {
      bodyCount--
    } else if (bodyPart === 1 && bodyCount < 5) {
      bodyCount = 5
    }
}

//Change shoes

function changeShoesUp () {
  var shoesSrc = "./images/shoes" + shoesCount + ".png"
    shoes.src = shoesSrc
    if (bodyPart === 2 && shoesCount < 5) {
      shoesCount++
    } else if (bodyPart === 2 && shoesCount === 5) {
      shoesCount = 0
    }
}

function changeShoesDown () {
  var shoesSrc = "./images/shoes" + shoesCount + ".png"
    shoes.src = shoesSrc
    if (bodyPart === 2 && shoesCount >= 1) {
      shoesCount--
    } else if (bodyPart === 2 && shoesCount < 5) {
      shoesCount = 5
    }
}

document.onkeydown = function(event) {
  if (event.keyCode === 37 && bodyPart === 0) {
    changeHeadDown()
  } else if (event.keyCode === 37 && bodyPart === 1) {
    changeBodyDown()
  } else if (event.keyCode === 37 && bodyPart === 2) {
    changeShoesDown()
  } else if (event.keyCode === 39 && bodyPart === 0) {
    changeHeadUp()
  } else if (event.keyCode === 39 && bodyPart === 1) {
    changeBodyUp()
  } else if (event.keyCode === 39 && bodyPart === 2) { 
    changeShoesUp()
  } else if (event.keyCode === 40) {
    changeBodyPartUp()
  } else if (event.keyCode === 38) {
    changeBodyPartDown()
  }
}