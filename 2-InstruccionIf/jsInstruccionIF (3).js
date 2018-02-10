function Mostrar()
{
//tomo la edad  

	var edad;
	var linea;
	// Acordate de la sentencia document.getElementById('').value; es un quilombo pero no hay de otra.
	linea = document.getElementById('edad').value;
	edad = parseInt(linea);

	if (edad > 17) {
		alert("Usted es mayor de edad.");
	}

	else {
		alert("Usted es menor de edad.");
	}

}//FIN DE LA FUNCIÓN