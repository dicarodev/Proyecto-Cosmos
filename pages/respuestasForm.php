<?php
$userName = $_POST['user_name_hiddden'];
$tiempoEmpleado = $_POST['tiempo_empleado'];
$respuestas = [];
for ($i = 1; $i <= 20; $i++) {
    $key = 'pregunta' . $i;
    if (isset($_POST[$key]) && !empty($_POST[$key])) {
        $respuestas[] = $_POST[$key];
    } else {
        $respuestas[] = '';
    }
}

$puntuacion = 0;

$respuestas_correctas = ['correcta','correcta','correcta','correcta','correcta','correcta','correcta','correcta','correcta','correcta','correcta','correcta','correcta','correcta','correcta','correcta','correcta','correcta','correcta','correcta']; // Array con las respuestas correctas de cada pregunta

for ($i = 0; $i < count($respuestas_correctas); $i++) {
    if (empty($respuestas[$i])) {
        $puntuacion += 0; // si la respuesta está vacía, la puntuación para esa pregunta es cero
    } else if ($respuestas_correctas[$i] == $respuestas[$i]) {
        $puntuacion += 1;
    }
}

$archivo = fopen("../users.txt", "a") or die("No se pudo abrir el archivo");

// Escribimos los datos separados por comas en una línea del archivo
fwrite($archivo, "$userName,$puntuacion,$tiempoEmpleado\n");

// Cerramos el archivo
fclose($archivo);

header("Location: ./ranking.html");
echo '<script>window.onload = function() { leerRankin(); }</script>';
?>