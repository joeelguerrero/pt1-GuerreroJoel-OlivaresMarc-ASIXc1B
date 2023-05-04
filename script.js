const btn = document.getElementById('dark-mode-btn');
const body = document.querySelector('body');

btn.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
  if (body.classList.contains('dark-mode')) {
    btn.textContent = 'Modo claro';
  } else {
    btn.textContent = 'Modo oscuro';
  }
});
  function actualizarReloj() {
    var fecha = new Date();
    var hora = fecha.getHours();
    var minutos = fecha.getMinutes();
    var segundos = fecha.getSeconds();
    hora = hora < 10 ? "0" + hora : hora;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;
    var horaCompleta = hora + ":" + minutos + ":" + segundos;
    document.getElementById("reloj").innerHTML = horaCompleta;
  }
  setInterval(actualizarReloj, 1000);

  
