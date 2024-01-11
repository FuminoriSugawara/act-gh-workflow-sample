const { sqrt, square } = require("./calc");
describe("calc", () => {
  describe("sqrt", () => {
    it("should return sqrt", () => {
      const input = 4;

      const result = sqrt(input);

      expect(result).toEqual(2);
    });
  });

  describe("square", () => {
    it("should return square", () => {
      const input = 2;

      const result = square(input);

      expect(result).toEqual(4);
    });
  });
});
