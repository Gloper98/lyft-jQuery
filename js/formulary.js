$(document).ready(function(){
	
	var $email = $('#email');
	var $firstNameInput = $('#firstNameInput');
	var $lastNameInput = $('#lastNameInput');
	var $checkBox = $('#checkBox');
	var $doneBtn = $('#done-btn');
	var $CODE_TO_VALIDATE_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var $information = JSON.parse(localStorage.getItem('users'));
	
	function validateEmail() {  
		$information[0].email = $email.val();
    return ($CODE_TO_VALIDATE_EMAIL.test($email.val()));
  }; 
	
	function validateName() {
		$information[0].firstName = $firstNameInput.val();
		return ($firstNameInput.val().length >= 3);
	};
	
	function validateLastName(event) {
		$information[0].lastName = $lastNameInput.val();
		return ($lastNameInput.val().length >= 3);
	};
  
	function agreeWithTerms() {
		return ($checkBox.prop("checked"));
	};
	
	function finalValidation(){
	 return validateEmail() && validateName() && validateLastName() && agreeWithTerms();
  };
	
	function enableDisable(){
		if(finalValidation()){
			localStorage.setItem('users', JSON.stringify($information));
		  $doneBtn.attr('href', 'done.html');
		}
	};
	
	$email.on('input', validateEmail);
	$firstNameInput.on('input', validateName);
	$lastNameInput.on('input', validateLastName);
	$checkBox.on('click', agreeWithTerms);
	$doneBtn.click(enableDisable);
	
});
	