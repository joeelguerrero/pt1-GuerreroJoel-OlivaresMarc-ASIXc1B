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

  var time = [, , , ];
  var fecha = new Date();
  var reloj = document.getElementById('reloj');
  time[0] = fecha.getHours();
  time[1] = fecha.getMinutes();
  time[2] = fecha.getSeconds();
  var id = setInterval(update, 1000);
  function update() {
      fecha = new Date();
      time[0] = modtime(fecha.getHours());
      time[1] = modtime(fecha.getMinutes());
      time[2] = modtime(fecha.getSeconds());
      reloj.innerHTML = '<span class="square" id="h">' + time[0] + '</span><span class="point">:</span><span class="square" id="m">' + time[1] + '</span><span class="point">:</span><span class="square" id="s">' + time[2] + '</span>';
  }
  function modtime(hora) {
      return (hora < 10 ? '0' + hora : hora);
  }
  
