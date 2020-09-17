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

document.addEventListener('keydown', function(e){
  if (e.keyCode === 40) {
    bodyPart++
    if (bodyPart === 3) {
      bodyPart = 0
    }
  } else if (e.keyCode = 38) {
    bodyPart--
    if (bodyPart === -1) {
      bodyPart = 2
    }
  } 
  whatAmIChanging()
})

// function changeBodyPartUp () {
//   if (bodyPart === 0) {
//     bodyPart++
//   } else if (bodyPart === 1) {
//     bodyPart++
//   } else if (bodyPart === 2) {
//     bodyPart = 0
//   }
//   whatAmIChanging()
// }

// function changeBodyPartDown () {
//   if (bodyPart === 2) {
//     bodyPart--
//   } else if (bodyPart === 1) {
//     bodyPart--
//   } else if (bodyPart === 0) {
//     bodyPart = 2
//   }
//   whatAmIChanging()
// }

document.addEventListener('keydown', function(event){
  if (bodyPart === 0) {
    head.src = "./images/head" + headCount + ".png"
      if (event.keyCode == 39 && headCount < 5) {
        headCount++
      } else if (event.keyCode == 39 && headCount === 6) {
        headCount = 0
      } else if (event.keyCode == 37 && headCount >= 1) {
        headCount--
      } else if (event.keyCode == 37 && headCount < 5) {
        headCount = 5
      } 
    // savedImg.push(headCount)  
  } else if (bodyPart === 1) {
    body.src = "./images/body" + bodyCount + ".png"
    if (event.keyCode == 39 && bodyCount < 5) {
      bodyCount++
    } else if (event.keyCode == 39 && bodyCount === 6) {
      bodyCount = 0
    } else if (event.keyCode == 37 && bodyCount >= 1) {
      bodyCount--
    } else if (event.keyCode == 37 && bodyCount < 5) {
      bodyCount = 5
    }
  // savedImg.push(bodyCount)  
  } else if (bodyPart === 2) {
    shoes.src = "./images/shoes" + shoesCount + ".png"
    if (event.keyCode == 39 && shoesCount < 5) {
      shoesCount++
    } else if (event.keyCode == 39 && shoesCount === 5) {
      shoesCount = 0
    } else if (event.keyCode == 37 && shoesCount >= 1) {
      shoesCount--
    } else if (event.keyCode == 37 && shoesCount < 5) {
      shoesCount = 5
    }
  // savedImg.push(shoesCount)  
  } 
})

// document.onkeydown = function(event) {
//  if (event.keyCode === 40) {
//     changeBodyPartUp()
//   } else if (event.keyCode === 38) {
//     changeBodyPartDown()
//   } 
// }

// // // Get a reference to the image element
// var savedImg = document.getElementsByClassName("dress-a-parent")[0];
// var button = document.getElementById("saveButton")

// // Take action when the image has loaded <- change to button click
// button.addEventListener("onclick", function () {
//     var imgCanvas = document.createElement("canvas"),
//         imgContext = imgCanvas.getContext("2d");

//     // Make sure canvas is as big as the picture
//     imgCanvas.width = savedImg.width;
//     imgCanvas.height = savedImg.height;

//     // Draw image into canvas element
//     imgContext.drawImage(savedImg, 0, 0, savedImg.width, savedImg.height);

//     // Get canvas contents as a data URL
//     var imgAsDataURL = imgCanvas.toDataURL("image/png");

//     // Save image into localStorage
//     try {
//         localStorage.setItem("savedImg", imgAsDataURL);
//     }
//     catch (e) {
//         console.log("Storage failed: " + e);
//     }
// }, false)