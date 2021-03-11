/** Unit Converter **/
function convertFahrenheitToCelsius(temperature) {
  //conversion code
  const celsius = (temperature - 32)/1.8
  return celsius.toFixed(1)
}

function convertCelsiustoFahrenheit(temperature) {
  const fahrenheit = temperature * 1.8 + 32
  return fahrenheit.toFixed(1)
}

function convertPoundstoKilos(weight) {
  const kilo = weight * 0.4536
  return kilo.toFixed(2)
}

function convertLitrestoGallons(volume) {
  const gallon = volume * 0.22
  return gallon.toFixed(2)
}