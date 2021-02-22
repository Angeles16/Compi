document.getElementById("btnEjecutar").addEventListener("click", resultado);
document.getElementById("btnBorrar").addEventListener("click", borrar);
document.getElementById("leerArchivo").addEventListener("change", leerArchivo, false);
document.getElementById("btnAlinear").addEventListener("click", alinearCodigo);


//INICIO LEER ARCHIVO
function leerArchivo(e) {
    alert("Entro a la funcion leer archivo");
    var archivo = e.target.files[0];
    if (!archivo) {
      return;
    }
    var lector = new FileReader();
    lector.onload = function(e) {
      var contenido = e.target.result;
      mostrarContenido(contenido);
        
    };
    lector.readAsText(archivo);
  }
  function mostrarContenido(contenido) {
    var elemento = document.getElementById('descripcion');
    elemento.innerHTML = contenido;
  }
//FIN LEER ARCHIVO



function alinearCodigo(){
    let description = document.getElementById("descripcion").value;
    let salida = document.getElementById("descripcion");

    salida.innerHTML = description;
}





function resultado(e){ 
    let description = document.getElementById("descripcion").value;
    let salida = document.getElementById("salida");
 
    

    salida.innerHTML = description







    /*salida.innerHTML = ` 
    <div class="card mb-3">
    <div class="card-body">
        <p>Salida ${description}</p>        
    </div>          
    </div>
    `; */ 


    e.preventDefault();
}





function borrar(){
    alert("borrando texto");
}