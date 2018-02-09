/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	var importe;
	var resultado;
	//Creaste la variable desucento para tener todo mas ordenado.
	var descuento;

	//Acordate de la sentencia document.getElementById('').value; es un quilombo, pero no hay de otra.
	importe = document.getElementById('importe').value;
	descuento = parseInt(importe) * 25 / 100;
	resultado = parseInt(importe) - descuento;

	//El .value se usa aunque se imprima una variable en el textarea.
	document.getElementById('resultado').value = resultado;
}
