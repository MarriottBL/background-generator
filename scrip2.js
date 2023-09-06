var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll('ul > li');



function inputLength() {
	return input.value.length;
}

function createListElement() {
	var deleButton = document.createElement("button");
	deleButton.setAttribute("class", "btn");
	deleButton.appendChild(document.createTextNode("Done"));

	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value ="";

	li.appendChild(deleButton);
	deleButton.addEventListener("click", removeItem);
	}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick,);

input.addEventListener("keypress", addListAfterKeypress);


var list = document.querySelectorAll('ul > li');
for (var i = 0; i < list.length; i++) {
   list[i].addEventListener("click", toggleList);
}

function toggleList(event) {
	event.target.classList.toggle("done");
}

var elements = document.getElementsByClassName("btn");
for (var i = 0; i < elements.length; i++){
  elements[i].addEventListener("click", removeItem);
}

function removeItem() {
this.parentNode.remove();
}    