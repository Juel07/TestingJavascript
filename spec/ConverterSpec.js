describe("Cooking Ingredients Converter", function() {

  describe("Temperatures", function() {
    it("converts Fahrenheit to Celsius to 1 decimal point", function() {
      const result = convertFahrenheitToCelsius(100);
      expect(result).toEqual('37.8');

      const result2 = convertFahrenheitToCelsius(78);
      expect(result2).toEqual('25.6');
    });
    it("converts Celsius to Farenheit to 1 decimal point", function() {
      const result = convertCelsiustoFahrenheit(37.8);
      expect(result).toEqual('100.0');

      const result2 = convertCelsiustoFahrenheit(25.6);
      expect(result2).toEqual('78.1');
    });
  });

  describe("Weight", function() {
    it("converts Pounds to kilos to 2 decimal points", function(){
      const kilo = convertPoundstoKilos(10);
      expect(kilo).toEqual('4.54')
    } )
  });

  describe("Volume", function() {
    it("converts Litre to Gallons to 2 decimal points", function() {
      const gallon = convertLitrestoGallons(5.1);
      expect(gallon).toEqual('1.12')
    })
  })
});
