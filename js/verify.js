$(document).ready(function(){
	var $information = JSON.parse(localStorage.getItem('users'));
	var $placeholderCountryCode = $('#placeholderCountryCode');
	var $countryCode = $information[0].phone.substr(0, 4);
	var $resendBtn = $('#resend-btn');
	var $newCode = 'LAB-' + Math.floor(Math.random() * ((999-100)+1) + 100);
	var $inputCode = $('#code');
	var $nextBtn = $('#next-btn');
	var $link = $('#link');
	
	function gettingNewCode() {
		alert($newCode);
		$nextBtn.prop('disabled', true);
		$link.prop('href', '#');
		$information[0].code = $newCode;
	}
	
  function btnFunctionality(e){
    if($inputCode.val() === $information[0].code.slice(4,7)){
			$nextBtn.prop('disabled', false);
			$link.prop('href', 'formulary.html');
			localStorage.setItem('users', JSON.stringify($information));
		} else {
			$nextBtn.prop('disabled', true);
			$link.prop('href', '#');
		}
  }
	
	$inputCode.on('input', btnFunctionality);
	$resendBtn.click(gettingNewCode);
	$placeholderCountryCode.text($countryCode);
	
})