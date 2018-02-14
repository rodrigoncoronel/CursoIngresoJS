function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var rnd;

	rnd = Math.floor(Math.random() * 11);

	if (rnd > 8) {

		alert("EXCELENTE: " + rnd);
	}

	else if (rnd < 4) {

		alert("Vamos, la proxima se puede: " + rnd);
	}

	else {

		alert("Aprobó: " + rnd);
	}

	//Este ejercicio es solo una combinacion de Random e If

}//FIN DE LA FUNCIÓN