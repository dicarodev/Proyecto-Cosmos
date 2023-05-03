window.addEventListener('load', function(){
    leerRanking();
})

function leerRanking(){
    // Leer el archivo y almacenar sus líneas en un arreglo
    fetch("../users.txt?timestamp=" + Date.now()).then(response => response.text()).then(data => {
        const lineas = data.trim().split("\n");

        // Eliminar las líneas vacías
        const lineasOk = lineas.filter(linea => linea.trim() !== "");

        // Ordenar las líneas del archivo con la función de comparación personalizada
        const lineasOrdenadas = lineasOk.sort(compararUsers);
        const lineasOrdenadasTopN = lineasOrdenadas.slice(0, 30); 
        // Generar una fila de la tabla con los campos
        let tableRows = "";
        for (let i = 0; i < lineasOrdenadasTopN.length; i++) {
            const fields = lineasOrdenadasTopN[i].split(",");
            let posicion = i + 1; // Sumar 1 a i para obtener la posición real
            let row = "<tr>";
            row += "<td>" + posicion + "</td>"; // Columna de posición
            row += "<td>" + fields[0] + "</td>"; // Columna de astronauta
            row += "<td>" + fields[1] + "</td>"; // Columna de puntuación
            row += "<td>" + fields[2] + "</td>"; // Columna de tiempo
            row += "</tr>";
            tableRows += row;
        }

        // Agregar las filas de la tabla al cuerpo de la tabla
        const bodyTabla = document.getElementById('bodyTabla');
        bodyTabla.innerHTML = tableRows;
    })
    .catch(function(error) {
        // Mostrar un mensaje de error si la petición fetch falla
        console.error('Error al bajar los datos:', error);
    });
}

// Definir una función de comparación personalizada para ordenar los usuarios por puntuación y tiempo
function compararUsers(a, b) {
    const fieldsA = a.split(",");
    const fieldsB = b.split(",");

    // Comparar por puntuación
    const scoreA = parseInt(fieldsA[1]);
    const scoreB = parseInt(fieldsB[1]);
    if (scoreA !== scoreB) {
    return scoreB - scoreA; // Orden descendente por puntuación
    }

    // En caso de empate, comparar por tiempo
    const timeA = parseFecha(fieldsA[2]);
    const timeB = parseFecha(fieldsB[2]);
    return timeA - timeB; // Orden ascendente por tiempo
}

function parseFecha(fechaString) {
    const parts = fechaString.split(":");
    const horas = parseInt(parts[0]);
    const minutos = parseInt(parts[1]);
    const segundos = parseInt(parts[2]);
    return horas * 3600 + minutos * 60 + segundos;
}