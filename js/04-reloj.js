/* 
4- Crear una web con un reloj
*/
function mostrarFecha() {
    let fecha = new Date();

    const diaSemana = [
        "Domingo",
        "Lunes",
        "Martes",
        "Miercoles",
        "Jueves",
        "Viernes",
        "Sabado",
    ];
    const meses = [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
    ];

    let parrafoFecha = document.getElementById("fecha");

    parrafoFecha.innerHTML = `
            ${diaSemana[fecha.getDay()]} ${fecha.getDate()} de ${
        meses[fecha.getMonth()]
    } del ${fecha.getFullYear()}
            `;
}

function mostrarHora() {
    let fecha = new Date();
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    let meridiano = "AM";

    if (horas > 12) {
        horas = horas - 12;
        meridiano = "PM";
    }

    minutos = (minutos < 10 ? "0" : "") + minutos;
    segundos = (segundos < 10 ? "0" : "") + segundos;

    let tiempo = `${horas} :  ${minutos} : ${segundos}  ${meridiano}`;

    document.getElementById("hora").innerHTML = tiempo;
}

setInterval(mostrarHora, 1000);
