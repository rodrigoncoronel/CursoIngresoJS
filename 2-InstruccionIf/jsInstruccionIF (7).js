function Mostrar()
{
//tomo la edad  

	var edad;
	var estadoCivil;
	var linea;

	linea = document.getElementById('edad').value;
	edad = parseInt(linea);
	estadoCivil = document.getElementById('estadoCivil').value;

	if (edad < 18 && estadoCivil != "Soltero") {

		alert("Es muy pequeño para no ser soltero");
	}
	// 09/02/2018 No funciona, despues averiguas como hacerlo funcionar

	// 13/03/2018 El problema era que en vez de poner '.' en el document.getElementById 
	// del  estadoCivil pusiste una ','

	//La cosa con el Select(en HTML) no cambia a como lo estaba haciendo antes 


}//FIN DE LA FUNCIÓN