
"use strict";

/* onReady() Called when the DOM is loaded and ready for manipulation.*/
function onReady() {
	var form = document.getElementById('signup');
	//form.addEventListener('submit', onSubmit); //below
  	var stateElem = form.elements['state'];
  	var occElem = form.elements['occupation'];
	var cancel = document.getElementById('cancelButton');
	var bdayElem = form.elements['birthdate'];
	
	stateOpt(stateElem);


 	occElem.addEventListener('change', function() {
 		if(this.value == 'other') {
 			form.elements['occupationOther'].style.display = 'block';
 		} else {
 			form.elements['occupationOther'].style.display = 'none';
 		}
 	});


 	cancel.addEventListener('click', function() {
 		var message = window.confirm("Are you sure you want to go?");
		if(message) {
			window.location.href = 'http://google.com';
		}
	});


 	form.addEventListener('submit', onSubmit);
 	function onSubmit(evt) {
		var valid; //CHECK
		try{
			valid = validateForm(this);
		} catch(exception) {
			valid =false;
		}

		if (!valid && evt.preventDefault) {
			evt.preventDefault();
		}

		evt.returnValue = valid;
		return valid;
	}

						//!!var validZip = validateZip(field);		check this later		!!
	function validateForm(form) {
		var requiredFields = ['firstName', 'lastName', 'address1', 'city', 'state'];
		

		if (form.elements['occupation'].value == 'other') {
			requiredFields.push('occupationOther');
		}

		//requiredFields.forEach(validateRequiredField, form);
		var fieldStatus = true;
		for (var i = 0; i < requiredFields.length; i++) {
			fieldStatus &= validateRequiredField(form.elements[requiredFields[i]]);
		}
		
		fieldStatus &= validateZip(form.elements['zip']);
		fieldStatus &= validateBday(form.elements['birthdate']);

		return fieldStatus;
	}

	function validateRequiredField(field) {
		var valid = field.value.trim().length > 0;
		validateAll(valid, field);
		return valid;
		/*
		if(0 == this[field].value.trim().length) {
			this[field].className = 'invalid-field form-control';
			return false;
		} else {
			this[field].className = 'form-control';
			return true;
		}*/	
	}

	function validateAll(valid, field) {
		if(valid) {
			field.className = 'form-control';
		} else {
			field.className = 'invalid-field form-control';
		}
	}

	function validateZip(zip) {
		var zipCode = zip.value;
		var zipRegExp = new RegExp('^\\d{5}$');
		var valid = zipRegExp.test(zipCode);	
		validateAll(valid, zip);
		return valid;
	}


	//bdayElem.addEventListener('change', validateBday);
	function validateBday(birthdate) {
		var today = new Date();
		var bday = new Date(birthdate.value);

		var years = today.getFullYear() - bday.getUTCFullYear();
		var valid = true;
		if(years > 13) {
			valid = true;
		} else if((years == 13) && (today.getMonth() == bday.getUTCMonth()) && (today.getDate() == bday.getUTCDate())) {
			valid = true;
			//11/17/2014
			//11/17/2001
			//11/18/2001
		} else {
			valid = false;
			//document.getElementById("birthdateMessage").innerHTML = "User is only 12 years old! Must be 13 to signup.";
		}

	    validateAll(valid, birthdate);
		return valid;
	}
} 


document.addEventListener('DOMContentLoaded', onReady);
function stateOpt(stateElem){
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

	
 	/*
	document.getElementById('birthdate');
	document.getElementById('birthdateMessage');
	var bDay = new Date();
	document.getElementById("demo").innerHTML = "Paragraph changed!";
			
			http://www.w3schools.com/jsref/jsref_obj_date.asp
			var dateEntered = Date.parse(form[birthday].value); //string
			var sth= new Date(dateEntered);						//date object
			sth.getDate() getFullYear() getMonth()
			var currentDate = new Date();
			currentDate.getDate() getFullYear() getMonth()

			if(sth > currentDate)

	document.getElementById("myDIV").className = "mystyle";
	class='form-control invalid';

	occupationOther 
 	*/



//toggle display none for other... extra field
//birthday calculation; 

/*
	var firstName = document.getElementById('firstName').value;
		document.getElementById('lastName').value = 
		document.getElementById('address1').value = 
		document.getElementById('city').value = 
		document.getElementById('state').value = 
		document.getElementById('zip').value = 
		document.getElementById('birthdate').value = 
*/

/*
function showOtherOcc() {
	var occ = document.getElementById('occupation');
	var occupationOther = document.getElementsByName('occupationOther')[0]; 
	if(occ.value == 'other') {
		occupationOther.style.display = 'block';
	}
}*/

/*function confirmLeave() {
	var buttonLeave = document.getElementById('cancelButton');
	
}*/