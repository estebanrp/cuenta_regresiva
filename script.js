let parrafoDias = document.querySelector("#dias");
let parrafoHoras = document.querySelector("#horas");
let parrafoMinutos = document.querySelector("#minutos");
let parrafoSegundos = document.querySelector("#segundos");
let spanFecha = document.querySelector("#fecha");
let cuentaAtras = document.querySelector("#cuenta-atras");
let inputFecha = document.getElementById("inputFecha");
let btnIniciar = document.getElementById("btnIniciar");

let div = document.getElementById("cuenta-atras");
let parrafos = div.getElementsByTagName("p");

let intervalo;

function iniciarCuentaRegresiva() {
    clearInterval(intervalo);
    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].style.color = "black";
    }

    // Obtener la fecha ingresada por el usuario
    let fechaUsuario = new Date(inputFecha.value);

    // Obtener los componentes de fecha
    let dia = fechaUsuario.getDate() + 1;
    let mes = fechaUsuario.getMonth() + 1; // Meses van de 0 a 11, por lo que sumamos 1
    let anio = fechaUsuario.getFullYear();

    // Formatear la fecha en el formato "dd/mm/yyyy"
    let fechaFormateada = `${dia < 10 ? '0' + dia : dia}/${mes < 10 ? '0' + mes : mes}/${anio}`;

    // Mostrar la fecha formateada en el span
    spanFecha.innerText = fechaFormateada;

    let msFechaUsuario = fechaUsuario.getTime();

    // Intervalo para actualizar la cuenta regresiva
    intervalo = setInterval(() => {
        let hoy = new Date().getTime();
        let distancia = msFechaUsuario - hoy;

        let msPorDia = 1000 * 60 * 60 * 24;
        let msPorHora = 1000 * 60 * 60;
        let msPorMinuto = 1000 * 60;
        let msPorSegundo = 1000;

        let dias = Math.floor(distancia / msPorDia);
        let horas = Math.floor(((distancia % msPorDia) / msPorHora) + 3);
        let minutos = Math.floor((distancia % msPorHora) / msPorMinuto);
        let segundos = Math.floor((distancia % msPorMinuto) / msPorSegundo);

        if (distancia < 0) {
            clearInterval(intervalo);
            for (let i = 0; i < parrafos.length; i++) {
                parrafos[i].style.color = "red"; // Cambiar el color a azul
            }
            return
        }

        // Mostrar la cuenta regresiva en el DOM
        parrafoDias.innerText = dias;
        parrafoHoras.innerText = horas < 10 ? "0" + horas : horas;
        parrafoMinutos.innerText = minutos < 10 ? "0" + minutos : minutos;
        parrafoSegundos.innerText = segundos < 10 ? "0" + segundos : segundos;

        // Detener la cuenta regresiva cuando llegue a cero
        
    }, 1000);
}

btnIniciar.addEventListener("click", iniciarCuentaRegresiva);