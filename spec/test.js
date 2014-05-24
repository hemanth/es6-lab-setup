var es6 = require("../dist/es6.js");
describe("ES6 suite", function() {
  it("should sq the number", function() {
    expect(es6.arrow(2)).toBe(4);
  });
  it("should give a count value", function() {
     var countr = new(new es6.gen());
     expect(countr.next().value).toBe(0);
     expect(countr.next().value).toBe(1);
     expect(countr.next().value).toBe(2);
     expect(countr.next().value).toBe(3);
  });
});