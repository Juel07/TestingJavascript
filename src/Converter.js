/** Unit Converter **/
function convertFahrenheitToCelsius(temperature) {
  //conversion code
  let celsius = (temperature - 32)/1.8
  return celsius.toFixed(1)
}

function convertCelsiustoFahrenheit(temperature) {
  const fahrenheit = temperature * 1.8 + 32
  return fahrenheit.toFixed(1)
}

function convertPoundstoKilos(weight) {
  const kilo = s * 0.4536

  return kilo.toFixed(2)
}