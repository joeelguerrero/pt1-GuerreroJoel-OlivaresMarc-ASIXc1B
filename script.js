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

function currentTime() {
  var date = new Date();
  var currentHour = date.getHours();
  var currentMinute = date.getMinutes();
  var currentSecond = date.getSeconds();
  var typeHour = currentHour < 12 ? 'AM' : 'PM';
  currentSecond = (currentSecond < 10 ? '0' : '') + currentSecond;
  currentMinute = (currentMinute < 10 ? '0' : '') + currentMinute;
  currentHour = currentHour > 12 ? currentHour - 12 : currentHour;
  currentHour = (currentHour < 10 ? '0' : '') + currentHour;
  var fullTime =
    currentHour + ':' + currentMinute + ':' + currentSecond + ' ' + typeHour;
  document.getElementById('currentTime').innerHTML = fullTime;
}

setInterval(currentTime, 1000);

const setAlarmBtn = document.getElementById('set-alarm-btn');
const alarmHourInput = document.getElementById('hour');
const alarmMinuteInput = document.getElementById('minutes');
const alarmSecondInput = document.getElementById('seconds');
const alarmTypeInput = document.getElementById('type');

setAlarmBtn.addEventListener('click', function() {
  var date = new Date();
  var currentHour = date.getHours();
  var currentMinute = date.getMinutes();
  var currentSecond = date.getSeconds();
  var typeHour = currentHour < 12 ? 'AM' : 'PM';
  currentSecond = (currentSecond < 10 ? '0' : '') + currentSecond;
  currentMinute = (currentMinute < 10 ? '0' : '') + currentMinute;
  currentHour = currentHour > 12 ? currentHour - 12 : currentHour;
  currentHour = (currentHour < 10 ? '0' : '')
  + currentHour;

  var selectedHour = parseInt(alarmHourInput.value);
  var selectedMinute = parseInt(alarmMinuteInput.value);
  var selectedSecond = parseInt(alarmSecondInput.value);
  var selectedType = alarmTypeInput.value;

  if (
    selectedHour === currentHour &&
    selectedMinute === currentMinute &&
    selectedSecond === currentSecond &&
    selectedType === typeHour
  ) {
    var audio = new Audio('http://ecxal.code4guate.com/sonido.mp3');
    audio.play();
    document.getElementById('mensaje').innerHTML = '<h1>Alarma sonando</h1>';
    audio.onended = function() {
      document.getElementById('mensaje').innerHTML = ' ';
      alarmHourInput.value = '';
      alarmMinuteInput.value = '';
      alarmSecondInput.value = '';
    };
  }
});
