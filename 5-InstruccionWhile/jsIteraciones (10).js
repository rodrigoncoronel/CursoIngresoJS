function Mostrar()
{

	var contador=0;
	//declarar contadores y variables
	var numero;
	var acumuladorNegativos;
	var acumuladorPositivos;
	var contadorNegativos = 0;
	var contadorPositivos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivoNegativo;
	
	
	var respuesta="si";

	while(respuesta=='si')
	{
		numero = prompt("Ingrese un numero");
		
		if(numero > 0)
		{
			acumuladorPositivos = acumuladorPositivos + numero;
			contadorPositivos++;
		}else if (numero < 0)
		{
			acumuladorNegativos = acumuladorNegativos + numero;
			contadorNegativos++;
		}else
		{
			contadorCeros++;
		}
		
		if (numero % 2 == 0)
		{
			contadorPares++;
		}
		
		promedioPositivos = acumuladorPositivos/contadorPositivos;
		promedioNegativos = acumuladorNegativos/contadorNegativos;
		diferenciaPositivoNegativo = acumuladorPositivos - acumuladorNegativos;
		
		
		respuesta = prompt("Desea seguir ingresando numeros?");
	}

//Parece jodido.... Enjoy <3
	document.write("Promedio de positivos:");

}//FIN DE LA FUNCIÓN