function Mostrar()
{
//tomo la edad  
	var edad;
	var linea;

	//Acordate de la sentencia document.getElementById('').value; es un quilombo pero no hay de otra.
	linea = document.getElementById('edad').value;
	edad = parseInt(linea);

	//'&&' funciona como un 'Y' en el if, con el objetivo de que se cumplan ambas condiciones para que se ejecute el mismo
	if (edad >= 13 && edad <= 17) {

		alert("Usted es adolescente");
	}

	// &&	Y
	// ||	O

}//FIN DE LA FUNCIÓN