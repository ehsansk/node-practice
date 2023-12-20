const os = require("os");

const endOfLine = os.EOL;

console.log(`This is a line.${endOfLine}This is a new line.`);

const archectech = os.arch();

console.log(`This arch of os ${archectech}`);
const freemem = os.freemem();
console.log(`my free memory = ${freemem}`);
var obj = {
  authorName: "Ryan Dahl",
  language: "Node.js",
};

function Display(x) {
  console.log(`value of x is = ${x} and author name is = ${obj.authorName}`);
}

Display(100);
