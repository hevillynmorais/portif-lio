function abrirCarta() {
  const flap = document.querySelector('.flap');
  const message = document.getElementById('message');

  // Animação do envelope
  flap.style.transform = 'rotateX(-180deg)';
  message.style.display = 'block';

  // Iniciar fogos
  iniciarFogos();
}

function iniciarFogos() {
  const canvas = document.getElementById('fireworks');
  const ctx = canvas.getContext('2d');

  canvas.width = window.innerWidth
