const btn = document.getElementById('dark-mode-btn');
const body = document.querySelector('body');
const alarmTimeDisplay = document.getElementById('alarmTime');
const setAlarmBtn = document.getElementById('set-alarm-btn');
const audio = new Audio('http://ecxal.code4guate.com/sonido.mp3');
const hourInput = document.getElementById('hour');
const minuteInput = document.getElementById('minutes');
const secondInput = document.getElementById('seconds');
const typeInput = document.getElementById('type');

btn.addEventListener('click', function() {
  body.classList.toggle('dark-mode');
  btn.textContent = body.classList.contains('dark-mode') ? 'Modo claro' : 'Modo oscuro';
});

function formatTime(hour, minute, second, type) {
  hour = hour % 12;
  hour = hour ? hour : 12;
  hour = hour.toString().padStart(2, '0');
  minute = minute.toString().padStart(2, '0');
  second = second.toString().padStart(2, '0');
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
  const selectedMinute = minuteInput.value;
  const selectedSecond = secondInput.value;
  const selectedType = typeInput.value;
  const fullAlarmTime = formatTime(selectedHour, selectedMinute, selectedSecond, selectedType);
  alarmTimeDisplay.textContent = fullAlarmTime;
}

function checkAlarm() {
  const date = new Date();
  const currentHour = date.getHours();
  const currentMinute = date.getMinutes();
  const currentSecond = date.getSeconds();
  const typeHour = currentHour < 12 ? 'AM' : 'PM';
  const selectedHour = Number(hourInput.value);
  const selectedMinute = Number(minuteInput.value);
  const selectedSecond = Number(secondInput.value);
  const selectedType = typeInput.value;

  if (
    currentHour === selectedHour &&
    currentMinute === selectedMinute &&
    currentSecond === selectedSecond &&
    typeHour === selectedType
  ) {
    audio.play();
    document.getElementById('mensaje').innerHTML = '<h1>Alarma sonando</h1>';
    audio.onended = function() {
      document.getElementById('mensaje').innerHTML = '';
      hourInput.value = '';
      minuteInput.value = '';
      secondInput.value = '';
    };
  }
}

setInterval(updateCurrentTime, 1000);
setAlarmBtn.addEventListener('click', setAlarm);
setInterval(checkAlarm, 1000);