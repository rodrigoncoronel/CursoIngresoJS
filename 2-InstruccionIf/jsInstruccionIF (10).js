function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var nota;

	nota = Math.floor(Math.random() * 10) + 1;

	if (nota > 8) {

		alert("EXCELENTE: " + nota);
	}

	else if (nota < 4) {

		alert("Vamos, la proxima se puede: " + nota);
	}

	else {

		alert("Aprobó: " + nota);
	}

	//Este ejercicio es solo una combinacion de Random e If
	
	// **CTRL + D Seleccion multiple a variable del mismo nombre**
}//FIN DE LA FUNCIÓN