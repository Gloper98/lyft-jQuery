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
	var $code = 'LAB-' + Math.floor(Math.random() * ((999-100)+1) + 100);
	var $users=[ ];
	var $country= 'Peru';
	var $prefix = '+51';
	var $chooseCountry = $('#choose-country');
	
	function hideOptions(){
		$('#choose-flag').toggleClass('hide');
	}
	
	function choosedColombia(){
		$placeholder.text($colombiaCode);
		$prefix = $colombiaCode;
		$('.flagJustSelected').attr('src',$srcImage + 'colombia.png');
		$country = 'Colombia';
		$phoneNumber.prop('disabled', false);
	}
	
	function choosedPeru(){
		$placeholder.text($peruCode);
		$('.flagJustSelected').attr('src',$srcImage + 'peru.png');
		$prefix = $peruCode;
		$country = 'Peru';
		$phoneNumber.prop('disabled', false);
	}
	
	function choosedMexico(){
		$placeholder.text($mexicoCode);
		$prefix = $mexicoCode;
		$('.flagJustSelected').attr('src',$srcImage + 'mexico.png');
		$country = 'Mexico';
		$phoneNumber.prop('disabled', false);
	}
	
	function choosedUSA(){
		$placeholder.text($usaCode);
		$prefix = $usaCode;
		$('.flagJustSelected').attr('src',$srcImage + 'usa.png');
		$country = 'The United States';
		$phoneNumber.prop('disabled', false);
	}
	
	function answerValidation() {
		var $characterNumber = $(this).val();
	  var $withoutBlankSpacesArray = $(this).val().split(' ');
		var $stringNumber = $withoutBlankSpacesArray.join('');
		var $firstnumber = $stringNumber.charAt(0);
		var $numberOfNumbers = $stringNumber.length === 9;
		
		if( $numberOfNumbers && $firstnumber==9 && $stringNumber*0===0) {
			$nextBtn.prop('disabled', false);
      $numberToSendCode = $prefix + $stringNumber;
		} else if ($stringNumber.length !== 0) {
			$chooseCountry.off("click");
		  $nextBtn.prop('disabled', true);
		} else if ($stringNumber.length == 0) {
			$chooseCountry.on("click", hideOptions);
		  $nextBtn.prop('disabled', true);
		}
	};
	
	function saveCode() {
		alert($code);
		$users.push({country: $country, code:$code, phone: $numberToSendCode, firstName: ' ', lastName: ' ', email: ' '});
		localStorage.setItem('users', JSON.stringify($users));
	}
	
	$chooseCountry.click(hideOptions);
	$('.flag-container-options').click(hideOptions);
	$('#colombia').click(choosedColombia);
	$('#peru').click(choosedPeru);
	$('#mexico').click(choosedMexico);
	$('#usa').click(choosedUSA);
	$phoneNumber.on('input', answerValidation);
	$nextBtn.click(saveCode);
									
})