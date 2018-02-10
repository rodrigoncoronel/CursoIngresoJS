function Mostrar()
{
	var largo;
	var ancho;
	var perimetro;
	var linea;

	linea = document.getElementById('largo').value;
	largo = parseInt(linea);
	linea = document.getElementById('ancho').value;
	ancho = parseInt(linea);

	perimetro = largo * ancho * 3;

	alert("Se necesitan: " + perimetro + "M de alambre.");

}
