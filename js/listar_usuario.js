$(document).ready(function(){
	$.ajax({
		url: 'php/listar_usuario.php',
		success:function(result)
		{
			$("#result").html(result);
			console.log(result);
		},
		error:function(error)
		{
			$("#result").html(error);
			console.log(error);
		}
	});
});