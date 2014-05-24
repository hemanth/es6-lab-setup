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

  it("should give a string", function() {
    expect(es6.ArrayComprehension()).toMatch('was');
  });

  it("should be undefined", function() {
    expect(es6.blockBinding()).toBe('undefined');
  });

  it("should return Hello World!", function() {
    expect(es6.defaultParmas()).toBe('Hello World!');
  });

  it("should return loremipsum", function() {
    expect(es6.destructuring()).toBe('loremipsum');
  });

  it("should return the sum of the arrays", function() {
    expect(es6.forOf([1,2,3])).toBe(6);
  });


});