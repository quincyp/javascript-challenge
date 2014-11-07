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

 	document.addEventListener('change', showOtherOcc);
	var cancel = document.getElementById('cancelButton');
 	cancel.addEventListener('click', confirmLeave);

 	/*
	document.getElementById('firstName').value = 
	document.getElementById('lastName').value = 
	document.getElementById('address1').value = 
	document.getElementById('city').value = 
	document.getElementById('state').value = 
	document.getElementById('zip').value = 
	document.getElementById('birthdate').value = 

	
	document.getElementsByNames('zip')[0];
	

	document.getElementById('birthdate');
	document.getElementById('birthdateMessage');
	var bDay = new Date();
	document.getElementById("demo").innerHTML = "Paragraph changed!";


	document.getElementById("myDIV").className = "mystyle";
	class='form-control invalid';


	occupationOther 

	Function onSubmit(evt) {
		Var reqField = this.elements['someRequiredField'];
		If (0 == reqField.value.trim().length) {
			reqField.className = 'invalid-field';
		}
		...
	}
 	*/
} 

function confirmLeave() {
	var buttonLeave = document.getElementById('cancelButton');
	var message = window.confirm("Are you sure you want to go?");
	if(message) {
		window.location.href = 'http://google.com';
	}
}

function showOtherOcc() {
	var occ = document.getElementById('occupation');
	var occupationOther = document.getElementsByName('occupationOther')[0]; 
	if(occ.value == 'other') {
		occupationOther.style.display = 'block';
	}
}

//toggle display none for other... extra field
//birthday calculation; 
document.addEventListener('DOMContentLoaded', onReady);

