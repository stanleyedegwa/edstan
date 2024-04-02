var button = document.getElementsByTagName('button')[0];
var input = document.getElementById("input");
var ul = document.querySelector("ul")


function inputLength() {
	return input.value.length;
}
function createElement() {
	var li = document.createElement("li");
	var but = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	but.appendChild(document.createTextNode("cancel"));
	but.classList.add("cancel")
	li.appendChild(but);
	ul.appendChild(li);
	input.value="";
	but.setAttribute("onclick","del(this);");
	// but.innerText="cancel";
	
}

function addListAfterClick() {
	if (inputLength() > 0) {
	createElement();
}}

function addListAfterKeydown(event){
	if (inputLength() > 0 && event.keyCode === 13) {
	createElement();
}}

button.addEventListener("click",addListAfterClick);
input.addEventListener("keydown",addListAfterKeydown);



var del = function(cancel) {
	par =cancel.parentElement;
	par.remove();
}

var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var nav = document.querySelector("nav")

color1.addEventListener("input",function() {
	nav.style.background = "linear-gradient(to right,"
	 + color1.value + "," + color2.value + ")";
 
})
color2.addEventListener("input",function() {
	nav.style.background = "linear-gradient(to right,"
	 + color1.value + "," + color2.value + ")";
 
})
var reg = (a,b) => a + b ; 

const stan = function(greet) {
	greet = "hello";
	let stan2 = function() {
	  alert(greet)
	}
	return stan2;
}
const newFunc = stan();
newFunc();