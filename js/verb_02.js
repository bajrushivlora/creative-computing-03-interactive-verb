
var three = document.querySelector(".three");


function randomNumber(h1, h2, h3) {    
  var h1 = randomNumber(0, 120);
  var h2 = randomNumber(140, 220);
  var h3 = randomNumber(230, 270);

  var color = "hsl("h1 + h2 + h3")";

     return color;
}

three.style.background = hslColor(h1, h2, h3);

