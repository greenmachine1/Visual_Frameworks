// this is the main java script file for the web-app
// Author: Cory Green
// Date: 03/06/2012
// project: Week 2 web-App

// targeting 		getElementsByTagName("tagname");	returns a collection
// 					getElementById("idvalue");


// changes color of input field when you click inside it.
function styleField1()
{
	var field = document.getElementById("fname");
	field.style.backgroundColor = "#0903FF";
}
// changes color of input field when you click inside it.
function styleField2()
{
	var field = document.getElementById("bname");
	field.style.backgroundColor = "#0903FF";
}

// changes the color back to original color when input field looses focus.
function unstyledField1()
{
	var field = document.getElementById("fname");
	field.style.backgroundColor = "#FFFFFF";
}

// changes the color back to original color when input field looses focus.
function unstyledField2()
{
	var field = document.getElementById("bname");
	field.style.backgroundColor = "#FFFFFF";
}

// when the window first loads, it will call on this addBorder function
window.onLoad = addBorder();

// creates a border around my ul elements //
function addBorder(){
	var getUltagname = document.getElementsByTagName("ul");
	getUltagname[1].style.border = "10px solid black";
}