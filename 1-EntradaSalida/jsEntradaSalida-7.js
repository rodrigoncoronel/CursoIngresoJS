/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	var suma;

	// Acordate de la sentencia  document.getElemtById('').value; es un quilombo, pero no hay de otra.
	numeroUno = document.getElementById('numeroUno').value;
	numeroDos = document.getElementById('numeroDos').value;

	suma = parseInt(numeroUno) + parseInt(numeroDos);

	alert("La suma es: " + suma);

}

function restar()
{

	var numeroUno;
	var numeroDos;
	var resta;

	//Acordate de la sentencia document.getElementById('').value; es un quilombo, pero no hay de otra.
	numeroUno = document.getElementById('numeroUno').value;
	numeroDos = document.getElementById('numeroDos').value;

	resta = parseInt(numeroUno) - parseInt(numeroDos);

	alert("La resta es: " + resta);
	
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var multiplicacion;

	//Acordate de la sentencia document.getElementById('').value; es un quilombo, pero no hay de otra.
	numeroUno = document.getElementById('numeroUno').value;
	numeroDos = document.getElementById('numeroDos').value;

	multiplica = parseInt(numeroUno) * parseInt(numeroDos);

	alert("La multiplicacion es: " + multiplicacion);
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var divicion;

	//Acordate de la sentencia document.getElementById('').value; es un quilombo, pero no hay de otra.
	numeroUno = document.getElementById('numeroUno').value;
	numeroDos = document.getElementById('numeroDos').value;

	divicion = parseInt(numeroUno) / parseInt(numeroDos);

	alert("La divicion es: " + divicion);
}

