var cambiarBtn = document.getElementById("cambiarColor");
var colorDiv = document.getElementById("colorDiv");
var colorInicial = colorDiv.style.backgroundColor;

cambiarBtn.addEventListener("click", cambiarColordiv);

// Función para cambiar el background color
function cambiarColordiv() {
  
  if (colorDiv.style.backgroundColor === colorInicial) {
    
    colorDiv.style.backgroundColor = "lightblue";
  } else {
   
    colorDiv.style.backgroundColor = colorInicial;
  }
}