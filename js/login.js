$(document).ready(function(){
	$("#login").click(function(){
		$.ajax({
			  url: 'localhost/login.php',
			  accepts: {
			    Accept: 'application/vnd.github.v3+json',
			  },
			  dataType: 'mycustomtype'
		});
	});
});