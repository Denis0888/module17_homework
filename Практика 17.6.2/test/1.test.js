import { evenOrOdd } from "../index/1";

describe("odd", () => {
   it("odd", () => {
      const result = evenOrOdd(5);
      expect(result).toBe("odd");
   }),
   it("even", () => {
      const result = evenOrOdd(6);
      expect(result).toBe("even");
   }),
   it("mistake", () => {
      const result = evenOrOdd("qwerty");
      expect(result).toBe("you made a mistake");
   });
});