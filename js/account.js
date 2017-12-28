$(document).ready(function(){
	var $information = JSON.parse(localStorage.getItem('users'));
	var $index_number = JSON.parse(localStorage.getItem('indexNumber'));
	var $user_name = $('#userName');
	var $first_name = $information[$index_number].firstName;
	var $last_name = $information[$index_number].lastName;
	$user_name.text($first_name + ' ' + $last_name);
})