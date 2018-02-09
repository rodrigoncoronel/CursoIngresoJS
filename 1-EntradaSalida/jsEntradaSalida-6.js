/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroUno;
	var numeroDos;
	var suma;

	//Acordate de la setencia document.getElementById('').value; es un quilombo pero no hay de otra.
	numeroUno = document.getElementById('numeroUno').value;
	numeroDos = document.getElementById('numeroDos').value;

	//El parseInt se le hace a las variables despues de que se les asigna un valor.
	suma = parseInt(numeroUno) + parseInt(numeroDos);

	alert("La suma es: " + suma);
}

