const btn = document.getElementById('dark-mode-btn');
const body = document.querySelector('body');
const alarmTimeDisplay = document.getElementById('alarmTime');
const setAlarmBtn = document.getElementById('set-alarm-btn');
const countdownDisplay = document.getElementById('countdown');
const audio = new Audio('http://ecxal.code4guate.com/sonido.mp3');
const hourInput = document.getElementById('hour');
const minuteInput = document.getElementById('minutes');
const secondInput = document.getElementById('seconds');
const typeInput = document.getElementById('type');
const mensaje = document.getElementById('mensaje');

btn.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
  btn.textContent = body.classList.contains('dark-mode') ? 'Modo claro' : 'Modo oscuro';
});

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

function setAlarm() {
  const selectedHour = hourInput.value;
  const selectedMinute = minuteInput.value || '00';
  const selectedSecond = secondInput.value || '00';
  const selectedType = typeInput.value;
  const fullAlarmTime = formatTime(selectedHour, selectedMinute, selectedSecond, selectedType);
  alarmTimeDisplay.textContent = fullAlarmTime;
  startCountdown(selectedHour, selectedMinute, selectedSecond, selectedType);
}

function startCountdown(hour, minute, second, type) {
  const endTime = new Date();
  endTime.setHours(hour);
  endTime.setMinutes(minute);
  endTime.setSeconds(second);
  
  if (type === 'PM' && hour < 12) {
    endTime.setHours(endTime.getHours() + 12);
  } else if (type === 'AM' && hour === 12) {
    endTime.setHours(0);
  }

  const countdownInterval = setInterval(() => {
    const currentTime = new Date();
    const remainingTime = Math.max(endTime - currentTime, 0);

    const remainingHours = Math.floor(remainingTime / 3600000);
    const remainingMinutes = Math.floor((remainingTime % 3600000) / 60000);
    const remainingSeconds = Math.floor((remainingTime % 60000) / 1000);

    const formattedRemainingHours = remainingHours.toString().padStart(2, '0');
    const formattedRemainingMinutes = remainingMinutes.toString().padStart(2, '0');
    const formattedRemainingSeconds = remainingSeconds.toString().padStart(2, '0');
    
    const formattedTime = `${remainingHours.toString().padStart(2, '0')}:${remainingMinutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    countdownDisplay.textContent = formattedTime;

    if (remainingTime <= 0) {
      clearInterval(countdownInterval);
      audio.play();
      mensaje.innerHTML = '<h1>Alarma sonando</h1>';
      alert('¡Es la hora de la alarma!');
      const disableAlarmBtn = document.createElement('button');
      disableAlarmBtn.textContent = 'Desactivar Alarma';
      disableAlarmBtn.addEventListener('click', function() {
      clearInterval(countdownInterval);
      audio.pause();
      mensaje.innerHTML = '';
      hourInput.value = '';
      minuteInput.value = '';
      secondInput.value = '';
      });
      mensaje.appendChild(disableAlarmBtn);
      }
      }, 1000);
      }
      
      function checkAlarm() {
      const date = new Date();
      const currentHour = date.getHours();
      const currentMinute = date.getMinutes();
      const currentSecond = date.getSeconds();
      const typeHour = currentHour < 12 ? 'AM' : 'PM';
      const selectedHour = Number(hourInput.value);
      const selectedMinute = Number(minuteInput.value || 0);
      const selectedSecond = Number(secondInput.value || 0);
      const selectedType = typeInput.value;
      
      if (
      currentHour === selectedHour &&
      currentMinute === selectedMinute &&
      currentSecond === selectedSecond &&
      typeHour === selectedType
      ) {
      startCountdown(selectedHour, selectedMinute, selectedSecond, selectedType);
      }
      }
      
      setInterval(updateCurrentTime, 1000);
      setAlarmBtn.addEventListener('click', setAlarm);
      setInterval(checkAlarm, 1000);