setInterval(() => {
    document.getElementById("reloj").textContent = new Date().toLocaleTimeString();
  }, 1000);