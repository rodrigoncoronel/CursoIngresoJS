/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

	var sueldo;
	var resultado;
	//Creaste la variable aumento para que este mas ordenado.
	var aumento;

	//Acordate de la sentencia document.getElementById('').value; es un quilombo, pero no hay de otra.
	sueldo = document.getElementById('sueldo').value;
	aumento = parseInt(sueldo) * 10 / 100;
	resultado = parseInt(sueldo) + aumento;

	//El .value se hace aunque se imprima una variable en el textatea.
	document.getElementById('resultado').value = resultado;

	//Y con esto terminas con todos los ejercicios de la carpeta 1-EntradaSalida.
}
