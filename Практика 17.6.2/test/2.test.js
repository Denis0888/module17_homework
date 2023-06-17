import { typeOfVariable } from "../index/2";

describe("odd", () => {
   it("Number", () => {
      const result = typeOfVariable(5);
      expect(result).toBe("value is Number");
   }),
   it("String", () => {
      const result = typeOfVariable("qwerty");
      expect(result).toBe("value is String");
   }),
   it("Boolean", () => {
      const result = typeOfVariable(true);
      expect(result).toBe("value is Boolean");
   }),
   it("Undefined", () => {
      const result = typeOfVariable(undefined);
      expect(result).toBe("value X is undefined");
   });
});