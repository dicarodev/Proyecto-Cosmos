
function translateToEnglish() {
    
   const translations = {
  'EL PLANETA ROJO': 'THE RED PLANET',
  'Marte': 'Mars',
  'El nombre "Marte" se debe al dios de la guerra según la mitología romana, equivalente al dios griego Ares. La elección del nombre se debe a que el color rojizo del planeta se asemeja al color de la sangre, lo que lo convierte en un símbolo de la guerra y la violencia. Además, en la astrología, el planeta Marte se asocia con la energía, la acción y la agresividad.': 'The name "Mars" comes from the god of war in Roman mythology, equivalent to the Greek god Ares. The name was chosen because the reddish color of the planet resembles the color of blood, making it a symbol of war and violence. Additionally, in astrology, the planet Mars is associated with energy, action, and aggression.',
  'CARACTERISTICAS': 'CHARACTERISTICS',
  'TEMPERATURA MEDIA DE DIA 0º G': 'AVERAGE DAYTIME TEMPERATURE: ',
  'TEMPERATURA MEDIA DE NOCHE ': 'AVERAGE NIGHTTIME TEMPERATURE: ',
  '¿PRESENCIA DE AGUA? ': 'IS THERE PRESENCE OF WATER? ',
  'COMPOSICIÓN DE LA ATMÓSFERA ': 'ATMOSPHERIC COMPOSITION: ',
  'MONTAÑAS ': 'MOUNTAINS: ',
  'CURIOSIDADES': 'CURIOSITIES',
  'Las estaciones en Marte duran el doble que en la tierra.': 'The seasons on Mars last twice as long as on Earth.',
  'Marte es el 4º planeta en orden de distancia al sol..': 'Mars is the 4th planet in order of distance from the Sun.',
  'Un año en Marte dura 687 días.': 'One year on Mars lasts 687 days.',
  'Un día en Marte dura 25 horas.': 'One day on Mars lasts 25 hours.',
  'Su tamaño es de la mitad de la Tierra.': 'Its size is half that of Earth.',
  'Marte es un planeta desértico y frío.': 'Mars is a desert and cold planet.',
  'Créditos': 'Credits',
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
        'THE RED PLANET': 'EL PLANETA ROJO',
        'Mars': 'Marte',
        'The name "Mars" comes from the god of war in Roman mythology, equivalent to the Greek god Ares. The name was chosen because the reddish color of the planet resembles the color of blood, making it a symbol of war and violence. Additionally, in astrology, the planet Mars is associated with energy, action, and aggression.': 'El nombre "Marte" se debe al dios de la guerra según la mitología romana, equivalente al dios griego Ares. La elección del nombre se debe a que el color rojizo del planeta se asemeja al color de la sangre, lo que lo convierte en un símbolo de la guerra y la violencia. Además, en la astrología, el planeta Marte se asocia con la energía, la acción y la agresividad.',
        'CHARACTERISTICS': 'CARACTERISTICAS',
        'AVERAGE DAYTIME TEMPERATURE: ': 'TEMPERATURA MEDIA DE DIA 0º G',
        'AVERAGE DAYTIME TEMPERATURE: ': 'TEMPERATURA MEDIA DE DIA: ',
  'AVERAGE NIGHTTIME TEMPERATURE: ': 'TEMPERATURA MEDIA DE NOCHE: ',
  'IS THERE PRESENCE OF WATER? ': '¿PRESENCIA DE AGUA? ',
  'ATMOSPHERIC COMPOSITION: ': 'COMPOSICIÓN DE LA ATMÓSFERA: ',
  'MOUNTAINS: ': 'MONTAÑAS: ',
  'CURIOSITIES': 'CURIOSIDADES',
  'The seasons on Mars last twice as long as on Earth.': 'Las estaciones en Marte duran el doble que en la Tierra.',
  'Mars is the 4th planet in order of distance from the Sun.': 'Marte es el 4º planeta en orden de distancia al Sol.',
  'One year on Mars lasts 687 days.': 'Un año en Marte dura 687 días.',
  'One day on Mars lasts 25 hours.': 'Un día en Marte dura 25 horas.',
  'Its size is half that of Earth.': 'Su tamaño es la mitad de la Tierra.',
  'Mars is a desert and cold planet.': 'Marte es un planeta desértico y frío.',
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