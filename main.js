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
	function makeCatagory()
	{
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
					"jazz", "other"],
		instrument1Value = "no";
		instrument2Value = "no";
		instrument3Value = "no";
		instrument4Value = "no";
		instrument5Value = "no";
		instrument6Value = "no";
		instrument7Value = "no";
		instrument8Value = "no";
		instrument9Value = "no";
		
		
					
// find value of selected buttons
function getCheckBoxValue()
{
	if($('guitar1').checked)
	{
		instrument1Value = $('guitar1').value;
	}
	else
	{
		instrument1Value = "No";
	}
	if($('guitar2').checked)
	{
		instrument2Value = $('guitar2').value;
	}
	else
	{
		instrument2Value = "No";
	}
	if($('bass').checked)
	{
		instrument3Value = $('bass').value;
	}
	else
	{
		instrument3Value = "No";
	}
	if($('drums').checked)
	{
		instrument4Value = $('drums').value;
	}
	else
	{
		instrument4Value = "No";
	}
	if($('vocalMain').checked)
	{
		instrument5Value = $('vocalMain').value;
	}
	else
	{
		instrument5Value = "No";
	}
	if($('backupVocals1').checked)
	{
		instrument6Value = $('backupVocals1').value;
	}
	else
	{
		instrument6Value = "No";
	}
	if($('backupVocals2').checked)
	{
		instrument7Value = $('backupVocals2').value;
	}
	else
	{
		instrument7Value = "No";
	}
	if($('backupVocals3').checked)
	{
		instrument8Value = $('backupVocals3').value;
	}
	else
	{
		instrument8Value = "No";
	}
	if($('other').checked)
	{
		instrument9Value = $('other').value;
	}
	else
	{
		instrument9Value = "No";
	}
	
}

	// store in local storage - key and id
	function storeData()
	{
		var id					= Math.floor(Math.random() * 1000000001);
		// gather up all our form field values and store in an object.
		// object properties contain array with the form label and input values
		getCheckBoxValue();
		var item 				= {};
			item.name 			= ["name", $('fname').value];
			item.bName 			= ["bName", $('bname').value];
			item.genre 			= ["genre", $('groups').value];
		
			item.instrument1	= ["instrument1", instrument1Value];
			item.instrument2	= ["instrument2", instrument2Value];
			item.instrument3	= ["instrument3", instrument3Value];
			item.instrument4	= ["instrument4", instrument4Value];
			item.instrument5	= ["instrument5", instrument5Value];
			item.instrument6	= ["instrument6", instrument6Value];
			item.instrument7	= ["instrument7", instrument7Value];
			item.instrument8	= ["instrument8", instrument8Value];
			item.instrument9	= ["instrument9", instrument9Value];
		
			item.other			= ["other", $('other').value];
			//item.tickets		= ["tickets", $('tickets').value];
		// save data into local storage: using stringify to convert our object to a string
		localStorage.setItem(id, JSON.stringify(item));
		alert("info saved!");
		
		
	}


	// calling on the makeCatagory function
	makeCatagory();

	/*// shows data function
	var dispInfo = $('dispInfo');
	dispInfo.addEventListener("click", getData);
	*/
	// set submit click events
	var submit = $('submit');
	submit.addEventListener("click", storeData);

	/*
	// clear function
	var clear = $('reset');
	clear.addEventListener("click", clearLocal);
	*/

});