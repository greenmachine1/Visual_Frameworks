// this is the main java script file for the web-app
// Author: Cory Green
// Date: 03/06/2012
// project: Week 2 web-App

// targeting 		getElementsByTagName("tagname");	returns a collection
// 					getElementById("idvalue");


// when the window first loads, it will call on this addBorder function
window.onLoad = addBorder();

// creates a border around my ul elements //
function addBorder(){
	var getUltagname = document.getElementsByTagName("ul");
	getUltagname[1].style.border = "10px solid black";
}