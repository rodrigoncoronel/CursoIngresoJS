function Mostrar()
{
	//tomo la edad  
	var mesDelAño = document.getElementById('mes').value;

	switch(mesDelAño)
	{
		case "Enero":
			alert("que comiences bien el año...");
			break;
		case "Marzo":
			alert("a clases...");
			break;
		case "Julio":
			alert("se vienen las vacaciones");
			break;
		case "Diciembre":
			alert("Felices fiestas");
			break;
		default:
			alert("Mes sin importancia");
			break;
	}
	//A ver... los case del switch dependen de los valores que va a tomar la variable que se use para el mismo.
	//En este caso, los case son literales como "Enero" o "Marzo" por que esos mismos valores va a tomar
	//Si fuera un numerico con opciones 1,2 y 3 los case del switch serian asi: case 1:... break. etc

}//FIN DE LA FUNCIÓN 