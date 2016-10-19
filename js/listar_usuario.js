$(document).ready(function(){
	$.ajax({
		url: 'php/listar_usuario.php',
		success:function(result)
		{
			result=JSON.parse(result);
			result.forEach(function(element){
				$(".table").append("<tr></tr>");
				$("tr").last().append("<td><img src='"+element['avatar_url']+"'></td>");
				$("tr").last().append("<td>"+element['login']+"</td>");
				$("tr").last().append("<td>"+element['repos_url']+"</td>");
			});
			
		},
		error:function(error)
		{
			alert(error);
		}
	});
	$(".list-group-item").click(function(){
		$.ajax({
			url:'php/detalhes.php',
			success: function(result)
			{
				result=JSON.parse(result);
				$(this).append(result);
				console.log(result);
			},
			error: function(error)
			{
				alert(error);
			}
		});
	});
});