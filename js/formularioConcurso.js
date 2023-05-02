const userName = document.getElementById('userName');
const btnIniciar = document.getElementById('btnIniciar');
const enviarRespuestas = document.getElementById('btnEnviar');
const formularioConcuro = document.getElementById('formularioConcuro');

let segundos = 0;
let horas = 0;
let minutos = 0;
let horasAux = "00";
let minutosAux = "00";
let segundosAux = "00";

btnIniciar.addEventListener('click', () => {
    leerTxt();
});

function leerTxt(){
    // Crear un diccionario vacío
    let users = {};

    // Obtener el contenido del archivo users.txt
    fetch('../users.txt')

    .then(response => response.text())

    .then(data => {
        // Dividir el contenido en líneas
        let lines = data.trim().split('\n');

        // Recorrer cada línea y agregar el UserName y la puntuación al diccionario
        for (let line of lines) {
            let [user, score, time] = line.trim().split(',');
            users[user] = {score, time};
        };

        if (userName.value.trim() === '') {
            alert('Introduce un nombre de usuario valido.');
        }else if(users.hasOwnProperty(userName.value.trim())){
            alert(`El nombre de usuario ${userName.value.trim()} ya existe.`);
        }else {
            formularioConcuro.style.display = 'block';
            setInterval(iniciarCrono, 1000);
            btnIniciar.disabled = true;

            let inputValue = userName.value.trim();
            document.getElementById("userNameHidden").value = inputValue;
            console.log(inputValue);
        };
    })
    .catch(error => {
        console.error('Ha habido un error en la peticion fetch', error);
    });
}

function iniciarCrono(){
    segundos++;

    if (segundos>59){minutos++;segundos=0;};
    if (minutos>59){horas++;minutos=0;};
    if (horas>24){horas=0;};

    segundosAux = (segundos < 10) ? "0" + segundos : segundos;
    minutosAux = (minutos < 10) ? "0" + minutos : minutos;
    horasAux = (horas < 10) ? "0" + horas : horas;

    document.getElementById("hms").innerHTML = `${horasAux}:${minutosAux}:${segundosAux}`; 
}

function detenerCrono(){
    document.getElementById("tiempoEmpleadoHidden").value = `${horasAux}:${minutosAux}:${segundosAux}`;
    clearInterval(intervalo);
}

