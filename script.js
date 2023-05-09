// Obtener elementos del DOM
const alarmTimeElement = document.getElementById('alarmTime');
const countdownElement = document.getElementById('countdown');
const setAlarmButton = document.getElementById('set-alarm-btn');
const btn = document.getElementById('dark-mode-btn');
const body = document.querySelector('body');
const hourInput = document.getElementById('hour');
const minuteInput = document.getElementById('minutes');
const secondInput = document.getElementById('seconds');
const typeInput = document.getElementById('type');


// Función para alternar el modo oscuro
btn.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
  btn.textContent = body.classList.contains('dark-mode') ? 'Modo claro' : 'Modo oscuro';
});

// Hora actual
function formatTime(hour, minute, second, type) {
  hour = parseInt(hour, 10) % 24;
  hour = hour.toString().padStart(2, '0');
  minute = minute ? minute.toString().padStart(2, '0') : '00';
  second = second ? second.toString().padStart(2, '0') : '00';
  return `${hour}:${minute}:${second} ${type}`;
}
function updateCurrentTime() {
  const date = new Date();
  const currentHour = date.getHours();
  const currentMinute = date.getMinutes();
  const currentSecond = date.getSeconds();
  const typeHour = currentHour < 12 ? 'AM' : 'PM';
  const fullTime = formatTime(currentHour, currentMinute, currentSecond, typeHour);
  document.getElementById('currentTime').textContent = fullTime;
}

// Variables de estado
let alarmTime;
let countdownInterval;

// Para establecer la alarma
function setAlarm() {
  const hour = parseInt(document.getElementById('hour').value);
  const minutes = parseInt(document.getElementById('minutes').value) || '00';
  const seconds = parseInt(document.getElementById('seconds').value) || '00';
  const type = document.getElementById('type').value;


  
  const now = new Date();
  alarmTime = new Date();
  
  if (type === 'PM' && hour < 12) {
    hour += 12;
  }
  
  alarmTime.setHours(hour);
  alarmTime.setMinutes(minutes);
  alarmTime.setSeconds(seconds);
  
  const countdown = alarmTime - now;
  
  if (countdown > 0) {
    startCountdown(countdown);
  } else {
    showAlert('La hora de la alarma debe ser en el futuro');
  }
}
// Para enseñar la alarma
function updateAlarmTime() {
  if (alarmTime) {
    const alarmHour = alarmTime.getHours();
    const alarmMinute = alarmTime.getMinutes().toString().padStart(2, '0');
    const alarmSecond = alarmTime.getSeconds().toString().padStart(2, '0');
    const alarmType = alarmHour < 12 ? 'AM' : 'PM';
    const fullTime = formatTime(alarmHour, alarmMinute, alarmSecond, alarmType);
    alarmTimeDisplay.textContent = fullTime;
  } else {
    alarmTimeElement.textContent = '--:--:--';
  }
}

// Para iniciar el contador
function startCountdown(countdown) {
  countdownInterval = setInterval(() => {
    countdown -= 1000;
    if (countdown > 0) {
      updateCountdown(countdown);
    } else {
      clearInterval(countdownInterval);
      playAlarm();
    }
  }, 1000);
}

// Para actualizar la visualización del contador
function updateCountdown(countdown) {
  const hours = Math.floor(countdown / (1000 * 60 * 60));
  const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countdown % (1000 * 60)) / 1000);
  
  countdownElement.textContent = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// Para reproducir la alarma
function playAlarm() {
  const audio = new Audio('http://ecxal.code4guate.com/sonido.mp3'); // Ruta al archivo de sonido de alarma
  audio.play();
  alert('Es la hora!')
}

// Para mostrar una alerta
function showAlert(message) {
  alert(message);
}

setInterval(updateCurrentTime, 1000);
// Asignar eventos a los botones
setAlarmButton.addEventListener('click', function() {
  setAlarm();
  updateAlarmTime();
});
setInterval(updateAlarmTime, 1000);
//setAlarmButton.addEventListener('click', setAlarm);
darkModeButton.addEventListener('click', toggleDarkMode);

  