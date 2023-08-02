// Fecha y hora final
var countDownDate = new Date("Dec 16, 2023 00:00:00").getTime();
console.log(countDownDate);

// Actualiza la cuenta regresiva cada 1 segundo
var x = setInterval(function() {

// Obtén la fecha y hora actual
var now = new Date().getTime();

// Encuentra la distancia entre la fecha actual y la fecha final
var distance = countDownDate - now;

// Calcula los días, horas, minutos y segundos
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

// Muestra la cuenta regresiva en el elemento con id "demo"
document.getElementById("countdown").innerHTML = days + " días " + hours + ":"
+ minutes + ":" + seconds + "";

// Si la cuenta regresiva llega a cero, muestra el texto "Finalizado"
if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "¡Llegó el gran día!";
}
}, 1000);