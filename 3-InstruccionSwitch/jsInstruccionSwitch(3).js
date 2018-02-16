function Mostrar()
{
	//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

	//alert (mesDelAño);
	
	switch(mesDelAño)
	{
		case "Febrero":
			alert("Este mes no tiene más de 29 días.");
			break;
		default:
			alert("Este mes tiene 30 o más días");
			break;
	}

	//Este ejercicio lo que hace es "Abusar" del default, como solo febrero tiene una leyenda distinta que los demas, 
	// el mismo (Febrero) tiene su propio case y el resto va para el default.

}//FIN DE LA FUNCIÓN