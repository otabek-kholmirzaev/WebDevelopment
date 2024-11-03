var images = document.querySelectorAll(".dice img");
for (var i = 0; i < images.length; i++) {
  var num = Math.floor(Math.random() * 6 + 1);
  var path = "./images/dice" + num + ".png";
  images[i].setAttribute("src", path);
}
