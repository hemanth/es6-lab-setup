var es6 = {};

// Arrow function.
es6.arrow = (x) => x * x;

// Array Comprehension.
es6.ArrayComprehension = function (){
  // BTW it was Charles Darwin's tortoise.
  return [ for (value of ["Harriet", "178"]) value ]
         .join(" was ");
}

// Block scope
es6.blockBinding = function (){ 
  {
    var wife = 1;
    let gfs = 10;
  };
  return typeof gfs;
}

// Default params.
es6.defaultParmas = function(msg="Hello ",name="World!"){
  return msg+name;
}

// Destructuring.
es6.destructuring = function (){
  var {foo, bar} = {foo: "lorem", bar: "ipsum"};
  return foo+bar;
}

// for of 
es6.forOf = function(nums) {
  let sum = 0;
  for (let element of nums) {
    sum = sum + element;
  }
  return sum;
}

// Generator function.
es6.gen = function(){
  var traceur = require("traceur");
  return function *Counter(){
    var n = 0;
    while(1<2) {
      yield n;
      ++n;
    }
  };
};

module.exports = es6;