function Mostrar()
{
//tomo la edad  
	
	var edad;
	var linea;

	linea = document.getElementById('edad').value;
	edad = parseInt(linea);

	if (edad >= 18) {
		 alert("Usted es mayor de edad.");
	}


}//FIN DE LA FUNCIÓN