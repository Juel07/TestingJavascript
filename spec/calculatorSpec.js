describe('Calculator', function () {
  describe('adding numbers', function () {
    it('returns the sum of the numbers', function () {
      expect(add(3, 5)).toEqual(8);
    });
  });
});
describe('Calculator', function () {
  describe('subtracting numbers', function () {
    it('returns the difference of the numbers', function () {
      expect(subtract(5, 3)).toEqual(2);
    });
  });
});