function Mostrar()
{
	//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

	//alert (mesDelAño);

	switch(mesDelAño)
	{
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio");
			break;
		case "Septiembre":
			alert("Ya pasamos el frio, ahora calor!!!.");
			break;
		case "Junio":
			alert("Falta poco para el invierno");
			break;
		default:
			alert("Mes sin importancia");
			break;
	}
	//sin un break al final del case se ejecuta el siguiente case

}//FIN DE LA FUNCIÓN