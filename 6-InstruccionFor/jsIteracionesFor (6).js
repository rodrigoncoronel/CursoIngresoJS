function Mostrar()
{
	var numero;
	var contador = 0;

	numero = prompt("Ingrese un numero: ");
	numero = parseInt(numero);
	for (var i = 2; i<numero; i++){

		if (i % 2 == 0) {

			console.log(i);
			contador++;

		}
	}
	console.log("Cantidad de Pares: " + contador);


}//FIN DE LA FUNCIÓN