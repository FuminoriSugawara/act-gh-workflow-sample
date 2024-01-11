const { convertToNumber } = require("./input");
describe("input", () => {
  describe("convertToNumber", () => {
    it("should return number", () => {
      const input = "1";

      const result = convertToNumber(input);

      expect(result).toEqual(1);
    });

    it("should return 0 if input is empty", () => {
      const input = "";

      const result = convertToNumber(input);

      expect(result).toEqual(0);
    });

    it("should return 0 if input is null", () => {
      const input = null;

      const result = convertToNumber(input);

      expect(result).toEqual(0);
    });

    it("should return 0 if input is undefined", () => {
      const input = undefined;

      const result = convertToNumber(input);

      expect(result).toEqual(0);
    });

    it("should return 0 if input is NaN", () => {
      const input = NaN;

      const result = convertToNumber(input);

      expect(result).toEqual(0);
    });

    it("should return 0 if input is Infinity", () => {
      const input = Infinity;

      const result = convertToNumber(input);

      expect(result).toEqual(0);
    });

    it("should return 0 if input is -Infinity", () => {
      const input = -Infinity;

      const result = convertToNumber(input);

      expect(result).toEqual(0);
    });
  });
});
