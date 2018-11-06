
var container = document.querySelector(".content");

for (var i = 0; i < 4; i++) {
	
	var shape = document.createElement('div');
	shape.classList.add('shape');
 	var duration = randomNumber(1, 5);
  	shape.style.animationDuration = duration +'s';
	container.append(shape);
}

var shapes = document.querySelectorAll('.shape');
shapes.forEach(function (shape, i) {
  shape.addEventListener('click', function(event) {
    if (shape.classList.contains('shape-interaction')) {
        shape.classList.remove('shape-interaction');
    } else {
      shape.classList.add('shape-interaction');
    }

  });
});
