function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero=0;

	while(respuesta == "si")
	{
		numero = prompt("Ingrese un numero: ");
		numero = parseInt(numero);
		respuesta = prompt("Quiere seguir ingresando numeros? (si/no)");
		acumulador = acumulador + numero;
		contador++;
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;
	//Acordate de hacer parseInt cuando tenes que usar las variables para hacer calculos,
}//FIN DE LA FUNCIÓN