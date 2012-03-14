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
			makeSelect.setAttribute("id", "genre");
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
			$('addNew').style.display = "inline";
			$('items').style.display = "inline";
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
			item.genre 			= ["Genre:", $('genre').value];
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
		makeDiv.setAttribute("id", "item");
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$('item').style.display = "block";
		for(var i = 0, j = localStorage.length; i < j; i++)
		{
			var makeli = document.createElement('li');
			var linksLi = document.createElement('li');
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			// convert the string fromm local storage value back to an object by using JSON .parse
			var obj = JSON.parse(value); // changed obj to item
			var makeSubList = document.createElement('ul');
			makeli.appendChild(makeSubList);
			for(var n in obj)	// changed item from obj
			{
				var makeSubli = document.createElement('li');
				makeSubList.appendChild(makeSubli);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubli.innerHTML = optSubText;
				makeSubList.appendChild(linksLi);
			}
			makeItemLinks(localStorage.key(i), linksLi); // create our edit and delete buttons/links for each item in local storage
		}	
	}
	// make item links 
	// create edit and delete links for each stored item when displayed
	function makeItemLinks(key, linksLi)
	// add edit single item link
	{
		var editLink = document.createElement('a');
		editLink.href = "#";
		editLink.key = key;	
		var editText = "Edit Info";
		editLink.addEventListener("click", editItem);
		editLink.innerHTML = editText;
		linksLi.appendChild(editLink);
		
		// adds a seperator between links
		var breakTag = document.createElement('br');
		linksLi.appendChild(breakTag);
		
		var deleteLink = document.createElement('a');
		deleteLink.href = "#";
		deleteLink.key = key;
		var deleteText = "Delete Info";
		//deleteLink.addEventListener("click", deleteItem);
		deleteLink.innerHTML = deleteText;
		linksLi.appendChild(deleteLink);
	}
	
	function editItem()
	{
		// grab data from our local storage.
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);
		
		// show the form
		toggleControls("off");
		
		// populate the form fields with the current localStorage values.
		$('fname').value = item.fname[1];
		$('bName').value = item.bName[1];
		$('email').value = item.email[1];
		$('genre').value = item.genre[2];
		$('startdate').value = item.startdate[2];
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
		$('instrument1').value = item.instrument1[1];
		$('instrument2').value = item.instrument2[1];
		$('instrument3').value = item.instrument3[1];
		$('instrument4').value = item.instrument4[1];
		$('instrument5').value = item.instrument5[1];
		$('instrument6').value = item.instrument6[1];
		$('instrument7').value = item.instrument7[1];
		$('instrument8').value = item.instrument8[1];
		$('instrument9').value = item.instrument9[1];  */
		$('other1').value = item.other1[1];
		$('tickets').value = item.tickets[1];
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