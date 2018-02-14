function Mostrar()
{
//tomo la edad  

	var edad;
	var estadoCivil;
	var linea;

	linea = document.getElementById('edad').value;
	edad = parseInt(linea);
	estadoCivil = document.getElementById('estadoCivil').value;

	if (edad > 17 && estadoCivil == "Soltero"){

		alert("Es soltero y no es menor.")
	}


}//FIN DE LA FUNCIÓN