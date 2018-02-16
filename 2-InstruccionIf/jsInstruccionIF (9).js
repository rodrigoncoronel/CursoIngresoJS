function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var nota;

	nota = Math.floor(Math.random() * 10) + 1;

	alert(nota);

	//Para obtener un numero Random se usa el comando:
	//Math.floor(Math.random() * 11)
	//Esta cosa es un calculo mistico:
	// la variable Math.random genera un numero random (0,00001; 0,99999). al multiplicarlo por un numero (EJ: Math.random() * 10)
	// se multiplica el numero random generado (0,00001; 9,99999)
	//Lo que hace el comando Math.floor es truncar los numeros generados (creo)
	//Math.floor(Math.random() * 10) + 1; lo que hace este comando es generar un random del 0 al 10 (0;9) pero al sumarle un 1 al final
	// cambia; En vez de ser (0;9) pasa a ser (1;10)
	
	// **CTRL + D Seleccion multiple a variable del mismo nombre**
}//FIN DE LA FUNCIÓN