$(document).ready(function(){
	$.ajax({
		url: 'php/listar_usuario.php',
		success:function(result)
		{
			result=JSON.parse(result);
			result.forEach(function(element){
				$(".list-group").append("<li class='list-group-item'>"+element['login']+"</li>");
			});
			
		},
		error:function(error)
		{
			$("#result").html(error);
			console.log(error);
		}
	});
	$(".list-group-item").click(function(){
		
	});
});