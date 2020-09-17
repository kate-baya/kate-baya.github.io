  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Inflate The Unicorn!")

var counter1 = 0
var counter2 = 0
var counter3 = 0

var image1 = document.getElementsByClassName("inflate-an-image1")[0]
var image2 = document.getElementsByClassName("inflate-an-image2")[0]
var image3 = document.getElementsByClassName("inflate-an-image3")[0]

var britneyAudio = new Audio();
britneyAudio.src = "britney.mp3";

var ohBaby = new Audio();
ohBaby.src = "ohBaby.mp3"

var djKhalidAudio = new Audio();
djKhalidAudio.src = "djKhalid.mp3";

var anotherOne = new Audio();
anotherOne.src = "anotherOne.mp3";

var shakiraShakiraAudio = new Audio();
shakiraShakiraAudio.src = "shakiraShakira.mp3";

var lalala = new Audio();
lalala.src = "lalala.mp3";


function changeImage1() {
 if (counter1 === 0) {
   image1.src = "images/unicorn-1.png"
   lalala.play()
   counter1++
  } else if (counter1 === 1) {
  image1.src = "images/unicorn-2.png"
  lalala.play()
  counter1++
  } else if (counter1 === 2) {
  image1.src = "images/unicorn-3.png"
  lalala.play()
  counter1++
  } else if (counter1 === 3) {
    shakiraShakiraAudio.play()
    modalShakira.style.display = "block";
  }
}  

function changeImage2() {
  if (counter2 === 0) {
    image2.src = "images/unicorn-1.png"
    anotherOne.play()
    counter2++
   } else if (counter2 === 1) {
   image2.src = "images/unicorn-2.png"
   anotherOne.play()
   counter2++
   } else if (counter2 === 2) {
   image2.src = "images/unicorn-3.png"
   anotherOne.play()
   counter2++
   } else if (counter2 === 3) {
    djKhalidAudio.play()
    modalKhalid.style.display = "block";
   }
 }  

 function changeImage3() {
  if (counter3 === 0) {
    image3.src = "images/unicorn-1.png"
    ohBaby.play()
    counter3++
   } else if (counter3 === 1) {
   image3.src = "images/unicorn-2.png"
   ohBaby.play()
   counter3++
   } else if (counter3 === 2) {
   image3.src = "images/unicorn-3.png"
   ohBaby.play()
   counter3++
   } else if (counter3 === 3) {
    britneyAudio.play()
    modalBritney.style.display = "block";
   }
 }  

image1.addEventListener("click", changeImage1);
image2.addEventListener("click", changeImage2);
image3.addEventListener("click", changeImage3);


// Get the modal
var modalShakira = document.getElementById("myModalShakira");
var modalKhalid = document.getElementById("myModalKhalid");
var modalBritney = document.getElementById("myModalBritney");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];
var span2 = document.getElementsByClassName("close2")[0];
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
  modalShakira.style.display = "none";
}
span2.onclick = function() {
  modalKhalid.style.display = "none"; 
}

span3.onclick = function() {
  modalBritney.style.display = "none"; 
}
  

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalShakira) {
    modalShakira.style.display = "none";
  } else if (event.target == modalKhalid) {
    modalKhalid.style.display = "none";
  } else if (event.target == modalBritney) {
    modalBritney.style.display = "none";
  }
}

