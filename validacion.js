function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var email = document.getElementById("email").value;
  
    if (nombre === "") {
      alert("Para poder continuar, ingrese su Nombre.");
      return false;
    }

    if (apellido === "") {
        alert("Para poder continuar, ingrese su Apellido.");
        return false;
      }
  
    if (email === "") {
      alert("Para poder continuar, ingrese su dirección de correo electrónico.");
      return false;
    }
  
    return true;
  }