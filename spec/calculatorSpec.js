describe('Calculator', function () {
  describe('adding numbers', function () {
    it('returns the sum of the numbers', function () {
      expect(add(3, 5)).toEqual(8);
      expect(add(8, -21)).toEqual(-13);
    });
  });
});
describe('Calculator', function () {
  describe('subtracting numbers', function () {
    it('returns the difference between the numbers', function () {
      expect(subtract(5, 3)).toEqual(2);
      expect(subtract(3,  3)).toEqual(0);
    });
  });
});
describe('Calculator', function () {
  describe('multiplying numbers', function () {
    it('returns the multiplication of the numbers', function () {
      expect(multiply(50, 30)).toEqual(1500);
      expect(multiply(-8, -40)).toEqual(320);
    });
  });
});
describe('Calculator', function () {
  describe('dividing numbers', function () {
    it('returns the division of the numbers', function () {
      expect(divide(121, 11)).toEqual(11);
      expect(divide(0, 1)).toEqual(0);
      expect(divide(17, 0)).toEqual(Infinity);
    });
  });
});