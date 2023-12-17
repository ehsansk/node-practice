const fs = require("fs");

// we pass them a function as a argument  - a callback -
// that gets called when last task is completed
// The callback has an argument that tells you whether the operaton is completed successful!
// now  we need to say what to do when fs.writeFile has completed (even it's nothing), and start
// checking for error

// fs.writeFile("read.txt", "today is osom day!", (err) => {
//   console.log(err);
// });

// fs.appendFile("read.txt", "😍 we append this text in file 😍", (err) => {
//   console.log("task completed");
// });

// we have to pass two callback argument for read data 'data and utf-8' to encode data
fs.readFile("read.txt", "utf-8", (err, data) => {
  console.log("data==", data);
});
