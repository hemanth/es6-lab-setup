var es6 = require("../dist/es6.js");
var traceur = require('traceur');
$traceurRuntime = traceur.runtime;
describe("ES6 suite", function() {
  it("should sq the number", function() {
    expect(es6.arrow(2)).toBe(4);
  });
  it("should give a count value", function() {
     var countr = new es6.gen();
     //expect()
  });
});