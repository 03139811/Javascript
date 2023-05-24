function Buscar() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("datos");// Asigna dato interesado x teclado
  filter = input.value.toUpperCase();// Convertir texto a mayuscula
  table = document.getElementById("tablaDatos");
  tr = table.getElementsByTagName("tr");//Asigna todas las filas a un arrays[]
  for (i = 0; i < tr.length; i++) {// Recorrido todas las filas de la tabla
    td = tr[i].getElementsByTagName("td")[0]; // Especialmente en la columna 0=Nombre pelicula
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) { //Busca el nombre pelicula en la tabla
        tr[i].style.display = "";//muestra pelicula completa linea
        } else {
        tr[i].style.display = "none";// oculta lineas de la tabla
      }
    }       
  }
}