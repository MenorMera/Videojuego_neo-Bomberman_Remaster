// Utilidad para mostrar/ocultar spinner
function showSpinner() {
  document.getElementById('download-spinner').classList.remove('hidden');
}
function hideSpinner() {
  document.getElementById('download-spinner').classList.add('hidden');
}

// Descargar juego
document.getElementById('download-game').addEventListener('click', function(e) {
  e.preventDefault();
  showSpinner();
  setTimeout(() => {
    hideSpinner();
    // window.location.href = 'path/to/game/file.zip'; // Descomenta para descarga real
  }, 2000);
});

// Descargar web
document.getElementById('download-web').addEventListener('click', function(e) {
  e.preventDefault();
  showSpinner();
  setTimeout(() => {
    // Simula descarga de la web
    const htmlContent = document.documentElement.outerHTML;
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = 'neo-bomberman-website.html';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    hideSpinner();
  }, 2000);
});

// Menú móvil (simulado)
document.querySelector('nav button').addEventListener('click', function() {
  // Aquí podrías mostrar un menú móvil real
});