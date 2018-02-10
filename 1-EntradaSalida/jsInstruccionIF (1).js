function Mostrar()
{
//tomo la edad  
	var edad;
	//Haces la variable linea para no tener tanto quilombo
	var linea;

	linea = document.getElementById('edad').value;
	edad = parseInt(linea);

	//Acordate que en los los comandos if cuando una variable es igual a otra hay que usar doble igual '=='.
	if (edad == 15) {
		alert("niña bonita");
	}

	/*
	Operadores de comparacion
	===	Verdad estricta
	== 	Igual
	!=	Distinto
	>	Mayor
	<	Menor
	>=	Mayor igual
	<=	Menor igual 
	*/
}//FIN DE LA FUNCIÓN