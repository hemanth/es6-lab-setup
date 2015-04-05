require("babel/polyfill");
require('traceur/bin/traceur-runtime');

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
  var counterFn = function *Counter(){
    var n = 0;
    while(1<2) {
      yield n;
      ++n;
    }
  };
  return (new counterFn());
};

es6.objectObserve = function(obj, changeFn) {
  // Gone to ES7
  // Object.observe(obj, changeFn);
}

es6.sortRestArgs = function (...theArgs){
  return theArgs.sort();
}

es6.spreadData = function (n) {
  var spreadedArray = [1,...n,5];
  return spreadedArray;
}

es6.symbols = function(value){
  var s = Symbol("catname");
  var object = {};
  object[s] = value;
  return object[s];
};

es6.map = function(answer, unset=true){
  let m = new Map();
  m.set('answer', answer);
  if(unset) {
    m.delete('answer');
  }
  return m.has('answer');
};

es6.objLiteral = function () {
  var x = -10;
  var y = 10;

  return {x, y};
};

es6.tmplLiteral = function(name="hemanth"){
  return `hello ${name}`;
};

module.exports = es6;
