/*Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	
	var nombre;
	//document llama al documento origen
	//.getElementById especifica que tipo de elemento que va a tomar(en este caso el Id)
	//*Acordate del CTRL+I el la T para cambiar el TagName a Id
	//*Acordate del .value
	//Hay dos formas de tomar datos, por prompt y .getElementById
	nombre = document.getElementById('elNombre').value; 
	alert(nombre);
}
