function Mostrar()
{

	var contador=0;
	var respuesta='si';
	var numero;
	var numeroMaximo = 0;
	var numeroMinimo = 0;

	while(respuesta=='si')
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		
		if (numero > numeroMaximo || contador==0)
		{
			numeroMaximo = numero;
		}
		if (numero < numeroMinimo || contador==0)
		{
			numeroMinimo = numero;
		}
		
		contador++;
		
		respuesta = prompt("Desea seguir ingresando numeros?");
	}

	document.getElementById('maximo').value = numeroMaximo;
	document.getElementById('minimo').value = numeroMinimo;


}//FIN DE LA FUNCIÓN