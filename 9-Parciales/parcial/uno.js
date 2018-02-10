
function Mostrar()
{
	var laBase;
	var linea
	var perimetro;

	//Acordate de la sentencia document.getElementById('').value; es un quilombo, pero no hay de otra.
	linea = document.getElementById('laBase').value;
	laBase = parseInt(linea);
	perimetro = laBase * 4;

	alert(perimetro);
}
