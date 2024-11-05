var buttons = document.querySelectorAll(".drum");

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    playSound(this.innerHTML);

    buttonAnimation(this.innerHTML);
  });
}

function playSound(key) {
  switch (key) {
    case "w":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;
  }
}

document.addEventListener("keydown", function (event) {
  playSound(event.key);

  buttonAnimation(event.key);
});

function buttonAnimation(currentKey) {
  var button = document.querySelector("." + currentKey);

  button.classList.add("pressed");

  setTimeout(function () {
    button.classList.remove("pressed");
  }, 150);
}
