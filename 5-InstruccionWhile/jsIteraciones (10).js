function Mostrar()
{

	var contador=0;
	//declarar contadores y variables
	var numero;
	var acumuladorNegativos = 0;
	var acumuladorPositivos = 0;
	var contadorNegativos = 0;
	var contadorPositivos = 0;
	var contadorCeros = 0;
	var contadorPares = 0;
	var promedioPositivos = 0;
	var promedioNegativos = 0;
	var diferenciaPositivoNegativo;
	
	
	var respuesta="si";

	while(respuesta=='si')
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		
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
		
		if (numero % 2 == 0 && numero !=0)
		{
			contadorPares++;
		}
		
		promedioPositivos = acumuladorPositivos/contadorPositivos;
		promedioNegativos = acumuladorNegativos/contadorNegativos;
		diferenciaPositivoNegativo = acumuladorPositivos - acumuladorNegativos;
		
		
		respuesta = prompt("Desea seguir ingresando numeros?");
	}

//Parece jodido.... Enjoy <3
	document.write("Suma de los negativos: " + acumuladorNegativos + '<br>');
	document.write("Suma de los positivos: " + acumuladorPositivos + '<br>');
	document.write("Cantidad de positivos: " + contadorPositivos + '<br>');
	document.write("Cantidad de negativos: " + contadorNegativos + '<br>');
	document.write("Cantidad de ceros: " + contadorCeros + '<br>');
	document.write("Cantidad de pares: " + contadorPares + '<br>');
	document.write("Promedio de positivos: " + promedioPositivos + '<br>');
	document.write("Promedio de negativos: " + promedioNegativos + '<br>');
	document.write("Diferencia entre positivos y negativos: " + diferenciaPositivoNegativo + '<br>');
	
}//FIN DE LA FUNCIÓN