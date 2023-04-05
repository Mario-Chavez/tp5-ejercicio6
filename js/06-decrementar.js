/* 

6- Realizar una web con un temporizador donde el usuario pueda ingresar
 un tiempo desde donde comenzará a decrementar el contador. Debe contener 
 los botones, iniciar, pausar y reset. 


*/
let temporizadorIntervalo;
let tiempoRestante = 0;
let tiempoElemento = document.getElementById("tiempo");

function iniciarTemporizador() {
    let tiempoInput = parseInt(document.getElementById("temporizador-input").value);

    if (!isNaN(tiempoInput)) {
        tiempoRestante = tiempoInput * 60;
    }

    temporizadorIntervalo = setInterval(() => {
        tiempoRestante--;

        let horas = Math.floor(tiempoRestante / 3600);
        let minutos = Math.floor((tiempoRestante - horas * 3600) / 60);
        let segundos = tiempoRestante % 60;

        if (horas < 10) {
            horas = "0" + horas;
        }

        if (minutos < 10) {
            minutos = "0" + minutos;
        }

        if (segundos < 10) {
            segundos = "0" + segundos;
        }

        tiempoElemento.textContent = `${horas}:${minutos}:${segundos}`;

        if (tiempoRestante === 0) {
            detenerTemporizador();
        }
    }, 1000);
}

function detenerTemporizador() {
    clearInterval(temporizadorIntervalo);
}

function reiniciarTemporizador() {
    detenerTemporizador();
    tiempoRestante = 0;
    tiempoElemento.textContent = "00:00:00";
}

document.getElementById("iniciar").addEventListener("click", iniciarTemporizador);
document.getElementById("pausar").addEventListener("click", detenerTemporizador);
document.getElementById("reset").addEventListener("click", reiniciarTemporizador);
