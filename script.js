//Global Variables
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

//Begin Functions

function inputLength() {
  return input.value.length;
}
//createListElement() modified to add button with onclick attribute

function createListElement() {
  var li = document.createElement("li");
  var button = document.createElement("button");
  button.setAttribute("onClick", "removeElement()");
  button.innerHTML = "Delete";
  li.appendChild(document.createTextNode(input.value + " ")); //added white space to separate newly created buttons from <li> text
  li.appendChild(button);
  ul.appendChild(li);
  input.value = "";
}
function addListAfterClick() {

  if (inputLength() > 0) {
    createListElement();
  }
}
function addListAFterKeypress(event) {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}

//strikeThrough is what toggles the striketrough style

function strikeThrough(e) {
  if (e.target && e.target.nodeName == "LI") {
    e.target.classList.toggle("done");
  }
}
function removeElement() {

  var x = event.target.parentElement.remove();

}

//Begin event listeners

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAFterKeypress);
ul.addEventListener("click", strikeThrough); //added Event Listener to ul element

