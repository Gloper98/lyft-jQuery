$(document).ready(function(){
	var $code = $('#code');
	var $firstNameInput = $('#firstNameInput');
	var $lastNameInput = $('#lastNameInput');
	var $loginBtn = $('#login-btn');
	var $information = JSON.parse(localStorage.getItem('users'));
	var $name_array, $name_without_bugs, $code_array, $code_without_bugs, $all_first_names, $all_last_names, $all_code;
	var $index_number;
	
	function validateName() {
		$name_array = $firstNameInput.val().split(' ');
		$name_without_bugs = $name_array.join(' ');
		for(var i = 0; i<$information.length;i++){
		$all_first_names = $information[i].firstName;
			if($all_first_names === $name_without_bugs){
				$index_number = i;
				return i;
			}
	  }
	};
	
	function validateCode() {
		$code_array = $code.val().split(' ');
		$code_without_bugs = $code_array.join('');
		for(var i = 0; i<$information.length;i++){
		$all_code = $information[i].code;
			if($all_code === $code_without_bugs){
				console.log(i);
				return i;
			}
	  }
	};

	function finalValidation(){
		return (validateName() === validateCode()) ;
  };
	
	function enable(){
		if(finalValidation()){
			localStorage.indexNumber=$index_number;
			$loginBtn.attr('href', 'account.html');
		}
	};
	
	$firstNameInput.on('input', validateName);
	$code.on('input', validateCode);
	$loginBtn.click(enable);
})