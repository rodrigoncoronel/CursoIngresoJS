function Mostrar()
{
//tomo la edad  

	var edad;
	var estadoCivil;
	var linea;

	linea = document.getElementById('edad').value;
	edad = parseInt(linea);
	linea = document,getElementById('estadoCivil').value;
	estadoCivil = linea.selectedIndex;

	if (edad < 18 && estadoCivil != "Soltero") {

		alert("Es muy pequeño para no ser soltero");
	}
	//No funciona, despues averiguas como hacerlo funcionar

	
}//FIN DE LA FUNCIÓN