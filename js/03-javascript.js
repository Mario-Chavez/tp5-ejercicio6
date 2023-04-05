/* 
3 - Crea una web con bootstrap y js, que contenga un botón input donde se
 pueda cargar una tarea y un botón que al ser presionado agregue dicha 
 tarea a una lista, cada elemento ingresado en la lista debe poder ser 
 eliminado con un botón creado para ese fin. 
*/

let formulario = document.getElementById("formulario");
let mostrarTarea = document.getElementById("mostrarTarea");
formulario.addEventListener("submit", agregarTarea);
let listasTareas = [];

function agregarTarea(e) {
    e.preventDefault();
    const tarea = document.getElementById("tarea").value;
    listasTareas.push(tarea);
    formulario.reset();
}

function verListaTarea() {
    let div = document.createElement("div");
    let nuevaList = listasTareas.map((tarea) => {
        return `<li>${tarea}</li>`;
    });
    let list = nuevaList.join("");
    div.innerHTML = list;
    div.className = "fs-3 text-start my-3";
    mostrarTarea.appendChild(div);
}

function eliminarTarea() {
    mostrarTarea.removeChild(mostrarTarea.children[3]);
    listasTareas.pop();
    verListaTarea();
}
