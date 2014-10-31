/*
    Signup Form Script
    This script will load the state select list and validate the form before submission
*/
/*
    app.js
    application script for the JavaScript and Forms Demo
*/

"use strict";

/* onReady()
* Called when the DOM is loaded and ready for manipulation.
* We need to populate the class standing select based on the standings array
* and add an event listener for the form's submit event
* */
function onReady() {
	var form = document.getElementById('signup');
  	var stateElem = form.elements['state'];
	console.log(stateElem);
	var i;
	var stateArray;

	for(i =  0; i < usStates.length; i++) {
	 	stateArray = document.createElement('option');
	 	stateArray.text = usStates[i].name;
	 	//console.log(stateArray.text);
	 	stateArray.value = usStates[i].code;
	 	stateElem.appendChild(stateArray);
 	}

} 

//toggle display none for other... extra field
//birthday calculation; 
document.addEventListener('DOMContentLoaded', onReady);

