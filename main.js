// this is the main java script file for the web-app
// Author: Cory Green
// Date: 03/06/2012
// project: Week 3 web-App
// updated for week 3 starting on march 12th, 2012

//waiting until the DOM is ready
window.addEventListener("DOMContentLoaded", function()
{
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
					"jazz", "other"];
												
	var	instrument1Value = "no",
		instrument2Value = "no",
		instrument3Value = "no",
		instrument4Value = "no",
		instrument5Value = "no",
		instrument6Value = "no",
		instrument7Value = "no",
		instrument8Value = "no",
		instrument9Value = "no"; 
		


// find value of selected buttons
function getCheckBoxValue()
{
	var idInfo = ["guitar1", "guitar2", "bass", "drums", "vocalMain", "backupVocals1",
				  "backupVocals2", "backupVocals3", "other"];
	var instrumentValues = ["instrument1Value", "instrument2Value", "instrument3Value",
							"instrument4Value", "instrument5Value", "instrument6Value",
							"instrument7Value", "instrument8Value", "instrument9Value"];

// injects guitar1, guitar2 etc. into idInfo...
	if($(idInfo[0]).checked)
	{
		instrument1Value = $(idInfo[0]).value;
	}
	else
	{
		instrument1Value = "No";
	}
	if($(idInfo[1]).checked)
	{
		instrument2Value = $(idInfo[1]).value;
	}
	else
	{
		instrument2Value = "No";
	}
	if($(idInfo[2]).checked)
	{
		instrument3Value = $(idInfo[2]).value;
	}
	else
	{
		instrument3Value = "No";
	}
	if($(idInfo[3]).checked)
	{
		instrument4Value = $(idInfo[3]).value;
	}
	else
	{
		instrument4Value = "No";
	}
	if($(idInfo[4]).checked)
	{
		instrument5Value = $(idInfo[4]).value;
	}
	else
	{
		instrument5Value = "No";
	}
	if($(idInfo[5]).checked)
	{
		instrument6Value = $(idInfo[5]).value;
	}
	else
	{
		instrument6Value = "No";
	}
	if($(idInfo[6]).checked)
	{
		instrument7Value = $(idInfo[6]).value;
	}
	else
	{
		instrument7Value = "No";
	}
	if($(idInfo[7]).checked)
	{
		instrument8Value = $(idInfo[7]).value;
	}
	else
	{
		instrument8Value = "No";
	}
	if($(idInfo[8]).checked)
	{
		instrument9Value = $(idInfo[8]).value;
	}
	else
	{
		instrument9Value = "No";
	} 
}	


function toggleControls(n)
{
	switch(n)
	{
		case "on":
			$('bandInfo').style.display = "none";
			$('reset').style.display = "inline";
			$('dispInfo').style.display = "none";
			$('addNew').style.display = "inline";
			break;
		case "off":
			$('bandInfo').style.display = "block";
			$('reset').style.display = "inline";
			$('dispInfo').style.display = "inline";
			$('addNew').style.display = "none";
			$('items').style.display = "none";
			break;
		default:
			return false;
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
			item.name 			= ["Your Name:", $('fname').value];
			item.bName 			= ["Band Name:", $('bname').value];
			item.email			= ["Email Address:", $('email').value];
			item.genre 			= ["Genre:", $('groups').value];
			item.date			= ["Date wanting: ", $('startdate').value];
			item.instrument1	= ["1 guitar", instrument1Value];
			item.instrument2	= ["2 guitars", instrument2Value];
			item.instrument3	= ["bass", instrument3Value];
			item.instrument4	= ["drums", instrument4Value];
			item.instrument5	= ["main vocals", instrument5Value];
			item.instrument6	= ["1 backup vocal", instrument6Value];
			item.instrument7	= ["2 backup vocals", instrument7Value];
			item.instrument8	= ["3 backup vocals", instrument8Value];
			item.instrument9	= ["Other Instrument(s)", instrument9Value];
		
			item.other			= ["Other Info:", $('other1').value];
			item.tickets		= ["Tickets Wanted", $('tickets').value];
		// save data into local storage: using stringify to convert our object to a string
		localStorage.setItem(id, JSON.stringify(item));
		alert("info saved!");
		
		
	}

	function getData()
	// writes data from local storage to the browser
	{
		toggleControls("on");
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$('items').style.display = "block";
		for(var i = 0, j = localStorage.length; i < j; i++)
		{
			var makeli = document.createElement('li');
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			// convert the string form local storage value back to an object byt using JSON .parse
			var obj = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			makeli.appendChild(makeSubList);
			for(var n in obj)
			{
				var makeSubli = document.createElement('li');
				makeSubList.appendChild(makeSubli);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubli.innerHTML = optSubText;
			}
		}	
	}
	// clear the local storage function
	function clearLocal()
	{
		if(localStorage.length === 0)
		{	
			alert("There is no data to clear.");
		}
		else
		{	
			localStorage.clear();
			alert("Everything has been deleted");
			window.location.reload();
			return false;
		}
	}
	// calling on the makeCatagory function
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