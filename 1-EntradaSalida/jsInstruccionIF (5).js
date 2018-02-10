function Mostrar()
{
//tomo la edad  
	var edad;
	var linea;

	linea = document.getElementById('edad').value;
	edad = parseInt(linea);

	if ( edad < 13 || edad > 17) {

		alert("Usted NO es adolescente");
	}

	//En este caso se usa en || (o) en vez de && (Y) ya que es una opcion o la otra, no puede ser mayor y menor a la vez.

	//Esta mal, no se por que, hay que arreglarlo.
}//FIN DE LA FUNCIÓN