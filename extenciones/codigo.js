var contador=0;
var tipo;
$(document).ready(function(){
	esconder();
	$("#seccion0").show();
	botonesh();
	$("#contenido").css("overflow","hidden");
	$("#competencia").click(function(){
		
		botonesh();
		esconder();
		$("#seccion6").show();
	});
	$("#inicio").click(function(){
		contador=0;
		esconder();
		$("#seccion0").show();
		botonesh();
		$("#contenido").css("overflow","hidden");
	});
	$("#u_1").click(function(){
		contador=0;
		tipo=1;
		esconder();
		$("#portada1").show();
		$("#contenido").css("overflow","hidden");
		botonesiz();
	});
	$("#u_2").click(function(){
		contador=0;
		tipo=2;
		esconder();
		$("#portada2").show();
		$("#contenido").css("overflow","hidden");
		botonesiz();
	});
	$("#u_3").click(function(){
		contador=0;
		tipo=3;
		esconder();
		$("#portada3").show();
		$("#contenido").css("overflow","hidden");
		botonesiz();
	});
	$("#u_4").click(function(){
		contador=0;
		tipo=4;
		esconder();
		$("#portada4").show();
		$("#contenido").css("overflow","hidden");
		botonesiz();
	});
	$("#u_5").click(function(){
		contador=0;
		tipo=5;
		esconder();
		$("#portada5").show();
		$("#contenido").css("overflow","hidden");
		botonesiz();
	});
	$("#creditos").click(function(){
		botonesh();
		esconder();
		$("#seccion7").show();
		$("#contenido").css("overflow","auto");
	});
	$("#antes").click(function(){
		if(contador==1){
			$("#portada"+ tipo).show();
			contador--;
			$("#antes").hide();
			$("#contenido").css("overflow","hidden");
			$("#despues").show();
		}
	});
	$("#despues").click(function(){
		if (contador==0) {
			$(".portada").hide();
			$("#antes").show();
			contador++;
			$("#contenido").css("overflow","auto");
			$("#despues").hide();
			$("#seccion"+ tipo).show();

		}
	});
});
function esconder(){
	$("#contenido>section").hide();
}
function botonesh(){
	$("#antes").hide();
	$("#despues").hide();
}
function botonesiz(){
	$("#antes").hide();
	$("#despues").show();
}