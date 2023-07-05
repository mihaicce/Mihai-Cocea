function actualizarBotonEnviar() {
    const checkboxPolitica = document.getElementById('politica');
    const enviarBtn = document.getElementById('enviarBtn');

    enviarBtn.disabled = !checkboxPolitica.checked;
  }

  const checkboxPolitica = document.getElementById('politica');
  checkboxPolitica.addEventListener('change', actualizarBotonEnviar);



