function Mostrar()
{
  var importeProducto;
  var linea;
  var importe;
  var importeFinal;

  linea = prompt("Ingrese importe del producto:");
  importeProducto = parseInt(linea);
  importe = importeProducto * 21 / 100;
  importeFinal = importeProducto + importe;

  document.getElementById('importeFinal').value = importeFinal;

}
