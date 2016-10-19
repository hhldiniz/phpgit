$(document).ready(function(){
	$.ajax({
		url: 'php/listar_usuario.php',
		success:function(result)
		{
			$("#result").append(result);
			console.log(result);
		},
		error:function(error)
		{
			$("#result").append(error);
			console.log(error);
		}
	});
});