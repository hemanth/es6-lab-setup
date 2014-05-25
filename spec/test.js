var es6 = require("../dist/es6.js");
describe("ES6 suite", function() {

  it("should sq the number", function() {
    expect(es6.arrow(2)).toBe(4);
  });

  it("should give a count value", function() {
     var countr = new es6.gen();
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

  it("should return the changed value", function() {
    // var obj = {};
    // var changeFn = function(changes){
    //   console.log(changes);
    //   return changes;
    // };
    // es6.objectObserve(obj, changeFn);

    // obj.name = "test";
  });

  it("should sort the passed list", function() {
    expect(es6.sortRestArgs(6,1,7,3,8).join(",")).toBe("1,3,6,7,8");
  });

  it("should give expanded array", function(){
    expect(es6.spreadData([2,3,4]).join(",")).toBe("1,2,3,4,5");
  });

  it("should give the name of cat", function(){

    expect(es6.symbols("milly")).toBe("milly");

  });

  it("to test presence of answer", function(){
    expect(es6.maps(42)).toBe(false);
    expect(es6.maps(42, false)).toBe(true);
  });


});