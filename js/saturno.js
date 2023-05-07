function translateToEnglish() {
    const translations = {
      'EL PLANETA DE LOS ANILLOS': 'THE PLANET OF RINGS',
      'SATURNO': 'SATURN',
      'El nombre de Saturno proviene del dios romano Saturno, quien era considerado el dios de la agricultura y la cosecha. Saturno era uno de los dioses más importantes en la mitología romana, y su influencia se extendió a la vida cotidiana de los romanos en campos como la religión, la política y la economía.': 'The name of Saturn comes from the Roman god Saturn, who was considered the god of agriculture and harvest. Saturn was one of the most important gods in Roman mythology, and his influence extended to the daily life of the Romans in fields such as religion, politics, and economy.',
      'CARACTERISTICAS': 'CHARACTERISTICS',
      'CURIOSIDADES': 'CURIOSITIES',
      'Es de los pocos planetas que tiene anillos alrededor.': 'It is one of the few planets that has rings around it.',
      'Según un estudio en Leicester, se llegó a la conclusión que hay agua en Saturno en varias formas de su composición.': 'According to a study in Leicester, it was concluded that there is water on Saturn in various forms of its composition.',
      'La gravedad en Saturno es de 10,4 m/s², es aproximadamente 10,4 veces la aceleración debida a la gravedad en la superficie de la Tierra.': 'The gravity on Saturn is 10.4 m/s², which is approximately 10.4 times the acceleration due to gravity on Earth\'s surface.',
      'La atmósfera está compuesta principalmente por hidrógeno y helio. Su atmósfera se extiende hasta una gran profundidad y está formada por varias capas.': 'The atmosphere is mainly composed of hydrogen and helium. Its atmosphere extends to a great depth and is formed by several layers.',
      'En la atmósfera de Saturno también se encuentran nubes, tormentas, auroras y vientos de hasta 1800 km/h.': 'In Saturn\'s atmosphere, there are also clouds, storms, auroras, and winds of up to 1800 km/h.',
      'Es el 6º planeta en orden de distancia al sol.': 'It is the 6th planet in order of distance from the Sun.',
      'Un día en Saturno dura alrededor de 11 horas, donde 10 horas son de día y 1 de noche.': 'A day on Saturn lasts about 11 hours, with 10 hours of daylight and 1 hour of night.',
      'La traslación tiene una duración de 29 años.': 'The orbital period lasts 29 years.',
      'La rotación dura 11 horas.': 'The rotation lasts 11 hours.',
      'Su radio mide alrededor de 58.000 km.': 'Its radius measures about 58,000 km.',
      'Saturno no tiene una superficie sólida definida como los otros planetas terrestres.': 'Saturn does not have a solid surface defined like the other terrestrial planets.',
      'Creditos': 'Credits',
      'UBICACIÓN': 'LOCATION'
    };
  
    const elements = document.querySelectorAll('#contenido p, #caracteristicas li, #curiosidades li, #introduccion p, #caracteristicas h2, #curiosidades h2, footer p');
elements.forEach((element) => {
const originalText = element.innerHTML.trim();
const decodedText = document.createElement('textarea');
decodedText.innerHTML = originalText;
const decodedValue = decodedText.value;
element.innerHTML = translations[decodedValue] || originalText;
});
}
  
  const flagUK = document.getElementById('btnEnglish');
  flagUK.addEventListener('click', translateToEnglish);
  




function translateToEspanish() {
    const translations = {
        'THE PLANET OF RINGS':'EL PLANETA DE LOS ANILLOS',
        'SATURN':'SATURNO',
        'The name of Saturn comes from the Roman god Saturn, who was considered the god of agriculture and harvest. Saturn was one of the most important gods in Roman mythology, and his influence extended to the daily life of the Romans in fields such as religion, politics, and economy.':'El nombre de Saturno proviene del dios romano Saturno, quien era considerado el dios de la agricultura y la cosecha. Saturno era uno de los dioses más importantes en la mitología romana, y su influencia se extendió a la vida cotidiana de los romanos en campos como la religión, la política y la economía.',
        'CHARACTERISTICS':'CARACTERISTICAS',
        'CURIOSITIES': 'Curiosidades',
        'It is one of the few planets that has rings around it.': 'Es de los pocos planetas que tiene anillos alrededor.',
        'According to a study in Leicester, it was concluded that there is water on Saturn in various forms of its composition.': 'Según un estudio en Leicester, se llegó a la conclusión de que hay agua en Saturno en varias formas de su composición.',
        'The gravity on Saturn is 10.4 m/s², which is approximately 10.4 times the acceleration due to gravity on Earth\'s surface.': 'La gravedad en Saturno es de 10,4 m/s², es aproximadamente 10,4 veces la aceleración debida a la gravedad en la superficie de la Tierra.',
        'The atmosphere is mainly composed of hydrogen and helium. Its atmosphere extends to a great depth and is formed by several layers.': 'La atmósfera está compuesta principalmente por hidrógeno y helio. Su atmósfera se extiende hasta una gran profundidad y está formada por varias capas.',
        'In Saturn\'s atmosphere, there are also clouds, storms, auroras, and winds of up to 1800 km/h.': 'En la atmósfera de Saturno también se encuentran nubes, tormentas, auroras y vientos de hasta 1800 km/h.',
        'It is the 6th planet in order of distance from the Sun.': 'Es el 6º planeta en orden de distancia al sol.',
        'A day on Saturn lasts about 11 hours, with 10 hours of daylight and 1 hour of night.': 'Un día en Saturno dura alrededor de 11 horas, donde 10 horas son de día y 1 de noche.',
        'The orbital period lasts 29 years.': 'La traslación tiene una duración de 29 años.',
        'The rotation lasts 11 hours.': 'La rotación dura 11 horas.',
        'Its radius measures about 58,000 km.': 'Su radio mide alrededor de 58.000 km.',
        'Saturn does not have a solid surface defined like the other terrestrial planets.': 'Saturno no tiene una superficie sólida definida como los otros planetas terrestres.',
        'Credits': 'Créditos',
        'LOCATION': 'UBICACIÓN'
      };
    
  
    const elements = document.querySelectorAll('#contenido p, #caracteristicas li, #curiosidades li, #introduccion p, #caracteristicas h2, #curiosidades h2, footer p');
elements.forEach((element) => {
const originalText = element.innerHTML.trim();
const decodedText = document.createElement('textarea');
decodedText.innerHTML = originalText;
const decodedValue = decodedText.value;
element.innerHTML = translations[decodedValue] || originalText;
});
}
  const flagES = document.getElementById('btnEspanol');
  flagES.addEventListener('click', translateToEspanish);