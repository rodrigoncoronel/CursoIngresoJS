function Mostrar()
{
//tomo la edad 
	var edad;
	var linea;

	linea = document.getElementById('edad').value;
	edad = parseInt(linea);

	if (edad > 17) {

		alert("Usted es mayor de edad.");
	}

	//Lo que hace el else if es unir los comandos dichos sin necesidad de poner uno dentro del otro  
	else if (edad < 13) {

			alert("Usted es un niño.");
		}

		else{

			alert("Usted es un adolescente:");
		}
	



}//FIN DE LA FUNCIÓN