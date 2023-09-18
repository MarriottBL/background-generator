var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

function randomize() {
  var randomColor1 = randomColors();
  var randomColor2 = randomColors();

  color1.value = randomColor1;
  color2.value = randomColor2;

  setGradient();
}

function randomColors() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}
