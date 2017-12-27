$(document).ready(function() {
	
	var $srcImage = '../assets/images/';
	var $phoneNumber = $('#number');
	var $usaCode = '+001 ';
	var $colombiaCode = '+57 ';
	var $mexicoCode = '+52 ';
	var $peruCode = '+51 ';
	var $placeholder=$('.placeholder');
	var $nextBtn = $('#next-btn');
	var $numberToSendCode;
	var $code = Math.floor(Math.random() * ((999-100)+1) + 100);
	var $users=[ ];
	var $country= 'Peru';
	
	function hideOptions(){
		$('#choose-flag').toggleClass('hide');
	}
	
	function choosedColombia(){
		$placeholder.text($colombiaCode);
		$('.flagJustSelected').attr('src',$srcImage + 'colombia.png');
		$country = 'Colombia';
	}
	
	function choosedPeru(){
		$placeholder.text($peruCode);
		$('.flagJustSelected').attr('src',$srcImage + 'peru.png');
		$country = 'Peru';
	}
	
	function choosedMexico(){
		$placeholder.text($mexicoCode);
		$('.flagJustSelected').attr('src',$srcImage + 'mexico.png');
		$country = 'Mexico';
	}
	
	function choosedUSA(){
		$placeholder.text($usaCode);
		$('.flagJustSelected').attr('src',$srcImage + 'usa.png');
		$country = 'The United States';
	}
	
	function answerValidation() {
		var $characterNumber = $(this).val();
	  var $withoutBlankSpacesArray = $(this).val().split(' ');
		var $stringNumber = $withoutBlankSpacesArray.join('');
		var $firstnumber = $stringNumber.charAt(0);
		var $numberOfNumbers = $stringNumber.length === 9;
		
		
		
		if( $numberOfNumbers && $firstnumber==9 && $stringNumber*0===0) {
			$nextBtn.prop('disabled', false);
      $numberToSendCode = $placeholder.text() + $stringNumber;
		} else {
			$nextBtn.prop('disabled', true);
		}
	};
	
	function saveCode() {
		alert($code);
		$users.push({country: $country, code:$code, phone: $numberToSendCode, firstName: ' ', lastName: ' ', email: ' '});
		localStorage.setItem('users', JSON.stringify($users));
	}
	
	
	
	
	$('#choose-country').click(hideOptions);
	$('.flag-container-options').click(hideOptions);
	$('#colombia').click(choosedColombia);
	$('#peru').click(choosedPeru);
	$('#mexico').click(choosedMexico);
	$('#usa').click(choosedUSA);
	$phoneNumber.on('input', answerValidation);
	$nextBtn.click(saveCode);
									
		

})