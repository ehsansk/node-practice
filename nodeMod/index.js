const chalk = require("chalk");
const validator = require("validator");

console.log(chalk.blue.italic("Hello world!"));
console.log(chalk.green.underline.inverse("success"));
console.log(chalk.red.underline.inverse("false"));

const res = validator.isEmail("ehsan@bar.com");
console.log(
  "is validEmail =",
  res ? chalk.blue.inverse(res) : chalk.red.inverse(res)
);
