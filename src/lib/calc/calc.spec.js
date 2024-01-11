const { sqrt } = require("./calc");
describe("calc", () => {
  describe("sqrt", () => {
    it("should return sqrt", () => {
      const input = 4;

      const result = sqrt(input);

      expect(result).toEqual(2);
    });
  });
});
