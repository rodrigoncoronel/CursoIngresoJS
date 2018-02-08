/*Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'MOSTRAR'*/
function Mostar()
{
	// defino una variable
	var nombre;

	//El prompt guarda un valor para una variable. El primer termino muestra el mensaje, el segundo es el valor por defecto
	nombre = prompt("Ingrese su nombre:", "Dexter");

	//El alert muestra un mensaje ya sea de una variable o un literal
	alert(nombre);

	//Codigo de prueba
	/*
	nombre ="Nico"; 
	alert(nombre);
	alert("nombre");
	*/
	//var person = prompt("Please enter your name", "Harry Potter");
}

