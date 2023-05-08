
function translateToEnglish() {
  
    const translations = {
      'EL PLANETA GIGANTE': 'THE GIANT PLANET',
      'JÚPITER': 'JUPITER',
      'Júpiter deriva de Ius-piter, o sea, últimamente, de Deus-pater “dios padre”. Esta evolución del nombre se debe a la influencia de la mitología griega en la romana, en la cual Zeus era el dios supremo, equivalente a Júpiter. Así que en cierto modo, Júpiter también podría considerarse como el padre de los dioses en la mitología romana.': 'Jupiter derives from Ius-piter, which ultimately comes from Deus-pater "father god". This evolution of the name is due to the influence of Greek mythology on Roman mythology, in which Zeus was the supreme god, equivalent to Jupiter. So in a way, Jupiter could also be considered the father of the gods in Roman mythology.',
      'CARACTERISTICAS': 'CHARACTERISTICS',
      'CURIOSIDADES': 'CURIOSITIES',
      'El mes con más lluvia es septiembre, con un promedio de 147 milímetros de lluvia': 'The month with the most rainfall is September, with an average of 147 millimeters of rain.' ,
      'El mes con menos lluvia es diciembre, con un promedio de 45 milímetros de lluvia.': 'The month with the least rainfall is December, with an average of 45 millimeters of rain.',
      'Hay presencia de agua? No, no hay evidencia de que haya agua líquida en Júpiter.': 'Is there presence of water? No, there is no evidence of liquid water on Jupiter.',
      'La atmosfera está compuesta principalmente de Hidrógeno y Helio y es densa y profunda, formada por varias capas.': 'The atmosphere is primarily composed of hydrogen and helium and is dense and deep, formed by several layers.',
      '¿Fenómenos meteorológicos? Sí, una gran variedad.': 'Weather phenomena? Yes, a wide variety.',
      'Es el quinto planeta en orden de distancia al Sol.': 'It is the fifth planet in order of distance from the Sun.',
      'El periodo de rotación en Júpiter es de 9 horas, 55 minutos y 30 segundos.': 'The rotation period on Jupiter is 9 hours, 55 minutes, and 30 seconds.',
      'El día dura alrededor de 5 horas.': 'The day lasts around 5 hours.',
      'La gravedad en Júpiter es de 24,79 m/s² lo que equivale a 2,53 veces la gravedad de la Tierra.': 'The gravity on Jupiter is 24.79 m/s², which is equivalent to 2.53 times the gravity of Earth',
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
        'THE GIANT PLANET': 'EL PLANETA GIGANTE',
        'JÚPITER': 'JUPITER',
        'Jupiter derives from Ius-piter, which ultimately comes from Deus-pater "father god". This evolution of the name is due to the influence of Greek mythology on Roman mythology, in which Zeus was the supreme god, equivalent to Jupiter. So in a way, Jupiter could also be considered the father of the gods in Roman mythology.': 'Júpiter deriva de Ius-piter, o sea, últimamente, de Deus-pater "dios padre". Esta evolución del nombre se debe a la influencia de la mitología griega en la romana, en la cual Zeus era el dios supremo, equivalente a Júpiter. Así que en cierto modo, Júpiter también podría considerarse como el padre de los dioses en la mitología romana.',
        'CARACTERISTICAS': 'CHARACTERISTICS',
        'CURIOSIDADES': 'CURIOSITIES',
        'The month with the most rainfall is September, with an average of 147 millimeters of rain.': 'El mes con más lluvia es septiembre, con un promedio de 147 milímetros de lluvia.',
        'The month with the least rainfall is December, with an average of 45 millimeters of rain.': 'El mes con menos lluvia es diciembre, con un promedio de 45 milímetros de lluvia.',
        'Is there presence of water? No, there is no evidence of liquid water on Jupiter.': 'Hay presencia de agua? No, no hay evidencia de que haya agua líquida en Júpiter.',
        'The atmosphere is primarily composed of hydrogen and helium and is dense and deep, formed by several layers.': 'La atmósfera está compuesta principalmente de Hidrógeno y Helio y es densa y profunda, formada por varias capas.',
        'Weather phenomena? Yes, a wide variety.': '¿Fenómenos meteorológicos? Sí, una gran variedad.',
        'It is the fifth planet in order of distance from the Sun.': 'Es el quinto planeta en orden de distancia al Sol.',
        'The rotation period on Jupiter is 9 hours, 55 minutes, and 30 seconds.': 'El periodo de rotación en Júpiter es de 9 horas, 55 minutos y 30 segundos.',
        'The day lasts around 5 hours.': 'El día dura alrededor de 5 horas.',
        'The gravity on Jupiter is 24.79 m/s², which is equivalent to 2.53 times the gravity of Earth.': 'La gravedad en Júpiter es de 24,79 m/s² lo que equivale a 2,53 veces la gravedad de la Tierra.',
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