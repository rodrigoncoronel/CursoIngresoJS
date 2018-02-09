/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numeroDividendo;
	var numeroDivisor;
	var resto;

	//Acordate de la sentencia document.getElementById('').value; es un quilombo, pero no hay de otra.
	numeroDividendo = document.getElementById('numeroDividendo').value;
	numeroDivisor = document.getElementById('numeroDivisor').value;

	//Para hacer el resto de una divicion se usa el simbolo '%'.
	resto = parseInt(numeroDividendo) % parseInt(numeroDivisor);

	alert("El resto es: " + resto);
}
