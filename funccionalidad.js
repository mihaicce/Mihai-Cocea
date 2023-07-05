function actualizarBotonEnviar() {
    const checkboxPolitica = document.getElementById('politica');
    const enviarBtn = document.getElementById('enviarBtn');

    enviarBtn.disabled = !checkboxPolitica.checked;
  }

  // Agregar un evento para escuchar los cambios en el checkbox
  const checkboxPolitica = document.getElementById('politica');
  checkboxPolitica.addEventListener('change', actualizarBotonEnviar);

