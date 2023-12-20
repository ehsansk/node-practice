// this is module wrapper fun
// wrap content inside a anonymous function so this anynomus fuction is wrapper fuction
(function (exports, require, module, __filename, __dirname) {
  const name = "ehsan";
  console.log(name);
});

var a = "ehsan";
console.log(a);

(function () {
  var a = "ehsan";
  console.log("this is private varaible inside wrapper fun =", a);
});

console.log(__dirname);
console.log(__filename);
