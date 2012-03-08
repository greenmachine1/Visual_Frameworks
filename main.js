// this is the main java script file for the web-app
// Author: Cory Green
// Date: 03/06/2012
// project: Week 2 web-App

//waiting until the DOM is ready
window.addEventListener("DOMContentLoaded", function(){

function $(x)
{
	var theElement = document.getElementById(x);
	return theElement;
}

//create select field elements and populate with elements
function makeCatagory(){
	var formTag = document.getElementsByTagName("form"),
		selectLi = $('select'),
		makeSelect = document.createElement('select');
		makeSelect.setAttribute("id", "groups");
	for(var i = 0, j = bandType.length; i < j; i++)
	{
		var makeOption = document.createElement('option');
		var optText = bandType[i];
		makeOption.setAttribute("value", optText);
		makeOption.innerHTML = optText;
		makeSelect.appendChild(makeOption);
	}
	selectLi.appendChild(makeSelect);
}
// variable defaults
var bandType = ["--choose a genre--","soft rock", "rock", "hard rock", "hard rock", "metal",
				"prog rock", "country", "folk", "classical", "rap", "kids music",
				"jazz", "other"];
makeCatagory();
// shows data function
var dispInfo = $('dispInfo');
dispInfo.addEventListener("click", getData);

// set submit click events
var submit = $('submit');
submit.addEventListener("click", storeData);

// clear function
var clear = $('reset');
clear.addEventListener("click", clearLocal);






});