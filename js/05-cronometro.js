/* 

5- Realizar una web con un cronómetro, que tenga las opciones de iniciar
, reset (volver el cronómetro a 0) y pausar.

*/

let counter = 0;
let cronometroIntervalo;
let horas = "00";
let minutos = "00";
let segundos = "00";

function mostrarTiempo(counter) {
    minutos = Math.floor(counter / 60);
    segundos = counter % 60;

    if (minutos < 10) {
        minutos = "0" + minutos;
    }

    if (segundos < 10) {
        segundos = "0" + segundos;
    }

    document.getElementById(
        "cronometro"
    ).innerHTML = `${horas} : ${minutos} : ${segundos}`;
}

function iniciarCronometro() {
    intervalId = setInterval(() => {
        counter++;
        mostrarTiempo(counter);
    }, 1000);
}

function detenerCronometro() {
    clearInterval(intervalId);
}

function reiniciarCronometro() {
    clearInterval(intervalId);
    counter = 0;
    mostrarTiempo(counter);
}
