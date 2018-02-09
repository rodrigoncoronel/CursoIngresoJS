/* 
	Debemos lograr tomar un dato por 'PROMPT' 
	y lo muestro por 'getElementById' al presionar el botón 'MOSTRAR'
*/
function Mostar()
{
	var nombre;
	nombre = prompt("Ingresa tu nombre");
	//Hay dos comandos de entrada prompt y document.getElementById 
	//Hay dos comandos de salida prompt y document.getElementById
	//Ambos son tanto de entrada como de salida, todo depende de que lado del "=" estan
	document.getElementById('elNombre').value = nombre;
}

