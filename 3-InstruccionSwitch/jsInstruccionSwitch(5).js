function Mostrar()
{
	//tomo la edad  
	var laHora = document.getElementById('hora').value;

	//alert (laHora);
	
	switch(laHora)
	{
		case "7":
		case "8":
		case "9":
		case "10":
		case "11":
			alert("Es de mañana.");
			break;
		default:
			alert("No se me permite decir nada sobre esta hora");
	}

	//Como la variable laHora es un string los case van entre comillas dobles ("7","8", etc).
	//Si fueran un parseInt no necesitarian las comillas.(Comprovado)


}//FIN DE LA FUNCIÓN