function Mostrar()
{

	var numero = 0;

	while(numero > 10 || numero < 1)
	{
		var numero = prompt("ingrese un número entre 0 y 10.");

		if (numero < 11 && numero >= 0 ) 
		{
			document.getElementById('Numero').value = numero;
		}
	}

	//No entiendo que se supone que hace este ejercicio....
}//FIN DE LA FUNCIÓN

//0800 122 2747 emergencias santander...