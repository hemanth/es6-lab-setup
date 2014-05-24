require("traceur");
var es6 = {};
es6.arrow = (x) => x * x;
es6.gen = function(){
  var traceur = require("traceur");
  return function *Counter(){
    var n = 0;
    while(1<2) {
      yield n;
      ++n
      }
    };
}
module.exports = es6;