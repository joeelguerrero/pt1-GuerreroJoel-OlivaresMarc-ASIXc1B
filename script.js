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

//Reloj
function currentTime() {
	var date = new Date();
	var currentHour = date.getHours();
	var currentMinute  = date.getMinutes();
	var currentSecond = date.getSeconds();
	var typeHour = (currentHour < 12) ? "AM" : "PM";
	var currentSecond  = ((currentSecond < 10) ? "0" : "") + currentSecond;
	var currentMinute  = ((currentMinute < 10) ? "0" : "") + currentMinute;
	var currentHour = (currentHour > 12) ? currentHour - 12 : currentHour;
	var currentHour = ((currentHour < 10) ? "0" : "")  + currentHour;
	var fullTime = (currentHour + ":" + currentMinute + ":" + currentSecond + " " + typeHour);
	document.getElementById('currentTime').innerHTML = fullTime;
}

setInterval(currentTime, 1000);

//Alarma
setInterval( function() {
	var date = new Date();
	var currentHour = date.getHours();
	var currentMinute  = date.getMinutes();
	var currentSecond = date.getSeconds();
	var typeHour = (currentHour < 12) ? "AM" : "PM";
	var currentSecond  = ((currentSecond < 10) ? "0" : "") + currentSecond;
	var currentMinute  = ((currentMinute < 10) ? "0" : "") + currentMinute;
	var currentHour = (currentHour > 12) ? currentHour - 12 : currentHour;
	var currentHour = ((currentHour < 10) ? "0" : "")  + currentHour;
	var fullTime = (currentHour + ":" + currentMinute + ":" + currentSecond + " " + typeHour);
	document.getElementById('currentTimeAlarm').innerHTML = fullTime;
		// si la hora actual coincide con la hora indicada...
		if( currentHour == document.getElementById("hour").value &&
			currentMinute == document.getElementById("minutes").value &&
			currentSecond == document.getElementById("seconds").value &&
		   	typeHour == document.getElementById("type").value
		)
		{
			var audio = new Audio('http://ecxal.code4guate.com/sonido.mp3');
			audio.play();
			document.getElementById("mensaje").innerHTML="<h1>Alarma sonando</h1>";
			// al finalizar el sonido escondemos el mensaje de "Alarma sonando"
			audio.onended = function() {
				document.getElementById("mensaje").innerHTML = " ";
				document.getElementById("hour").value = " ";
				document.getElementById("minutes").value = " ";
				document.getElementById("seconds").value = " ";
			};
		}
	},
1000);
