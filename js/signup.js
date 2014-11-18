
"use strict";

/* onReady() Called when the DOM is loaded and ready for manipulation.*/
function onReady() {
	var form = document.getElementById('signup');
  	var stateElem = form.elements['state'];
  	var occElem = form.elements['occupation'];
	var cancel = document.getElementById('cancelButton');
	var bdayElem = form.elements['birthdate'];
	
	//Options function for states list
	stateOpt(stateElem);

	//Listens for change function of occupation/other
 	occElem.addEventListener('change', function() {
 		if(this.value == 'other') {
 			form.elements['occupationOther'].style.display = 'block';
 		} else {
 			form.elements['occupationOther'].style.display = 'none';
 		}
 	});

 	//Listens for cancel and sees confirmation page
 	cancel.addEventListener('click', function() {
 		var message = window.confirm("Are you sure you want to go?");
		if(message) {
			window.location.href = 'http://google.com';
		}
	});

 	//Checks if submitting
 	form.addEventListener('submit', onSubmit);
 	function onSubmit(evt) {
		var valid;
		try{
			valid = validateForm(this);
		} catch(exception) {
			valid =false;
		}

		//Prevents submitting if not valid
		if (!valid && evt.preventDefault) {
			evt.preventDefault();
		}

		evt.returnValue = valid;
		return valid;
	}

	//Validates form			
	function validateForm(form) {
		var requiredFields = ['firstName', 'lastName', 'address1', 'city', 'state'];
		
		//Adds occupation other to validation list
		if (form.elements['occupation'].value == 'other') {
			requiredFields.push('occupationOther');
		}

		//Validates through list
		var fieldStatus = true;
		for (var i = 0; i < requiredFields.length; i++) {
			fieldStatus &= validateRequiredField(form.elements[requiredFields[i]]);
		}
		
		//Validates specifically for special cases zipcode and birthdate
		fieldStatus &= validateZip(form.elements['zip']);
		fieldStatus &= validateBday(form.elements['birthdate']);

		return fieldStatus;
	}

	//Validates fields for empty/spaces
	function validateRequiredField(field) {
		var valid = field.value.trim().length > 0;
		validateAll(valid, field);
		return valid;
	}

	//Validates all by using classNames
	function validateAll(valid, field) {
		if(valid) {
			field.className = 'form-control';
		} else {
			field.className = 'invalid-field form-control';
		}
	}

	//Validates Zip code (only digits)
	function validateZip(zip) {
		var zipCode = zip.value;
		var zipRegExp = new RegExp('^\\d{5}$');
		var valid = zipRegExp.test(zipCode);	
		validateAll(valid, zip);
		return valid;
	}


	//bdayElem.addEventListener('invalid', validateAll(valid, BirthDate));
	//Validates Age is minimum 13 years old
	function validateBday(birthdate) {
		var today = new Date();
		var bday = new Date(birthdate.value);

		var years = today.getFullYear() - bday.getUTCFullYear();
		var valid = true;
		if(years > 13) {
			valid = true;
		} else if((years == 13) && (today.getMonth() == bday.getUTCMonth()) && (today.getDate() == bday.getUTCDate())) {
			valid = true;
		} else {
			valid = false;
			//document.getElementById("birthdateMessage").innerHTML = "User is only 12 years old! Must be 13 to signup.";
		}

	    validateAll(valid, birthdate);
		return valid;
	}
} 

//Listens to the DOM for ready
document.addEventListener('DOMContentLoaded', onReady);

//Populates state options list
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