$(document).ready(function(){
	var $users=[ ];
	localStorage.setItem('users', JSON.stringify($users));
	setTimeout(function() {
		window.location.href='views/register.html'
	}, 3000);
});