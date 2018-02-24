function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var respuesta='si';

	while(respuesta == "si")
	{
		numero = prompt("Ingrese un numero:");
		numero = parseInt(numero);

		if(numero>0)
		{
			positivo= positivo + numero;

		}else{
			negativo = negativo * numero;
			
		}

		respuesta = prompt("Quiere seguir ingresando numeros?");

		contador++;
	}
				//**Buscar que carajo es isNaN**
				//Termina el resto de los ejercicios en casa...
//El negativo se inicializa en 1 porque se va a hacer una  multiplicacion en esa varible,
//Si fuera 0 y se ingresa solo un negativo, el resultado daria 0 (cosa que no deberia hacer).


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN