function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var resultado

	linea = prompt("Ingrese un numero:");
	numeroUno = parseInt(linea);
	linea = prompt("Ingrese otro numero:");
	numeroDos = parseInt(linea);

	if (numeroUno == numeroDos) {

		resultado = numeroUno * numeroDos;
	}

	if (numeroUno > numeroDos) {

		resultado = numeroUno - numeroDos;
	}

	if (numeroUno < numeroDos) {

		resultado = numeroUno + numeroDos;
	}

	//Lo que hace document.write es: en vez de una pantalla emergente, muesta lo deseado en toda la pantalla(...Ponele).
	 	document.write(resultado);

	//Con esto terminaste con los ejercicios del parcial, por ahora.
}

