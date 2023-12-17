const fs = require("fs");
const { encode } = require("punycode");

// create folder using async
// create file in it name bio.txt and data into it.
// add more data into the file at the end of existing data
// read data without getting buffer data first
// file encoding
// rename file name mybio.txt
// delete both file and folder

// 1. created folder
// fs.mkdir("ehsan", (err) => {
//   console.log("folder created");
// });

// 2. create file
// fs.writeFile("ehsan/bio.txt", "This asyn fs writeFile ", (err) => {
//   console.log("file created successfully");
// });

// 3. append data into existing file
// const appendData = "💝 i love javascript 💝";
// fs.appendFile("ehsan/bio.txt", appendData, (err, data) => {
//   console.log("data appended");
// });

// 4. read data without buffer
// fs.readFile("ehsan/bio.txt", (err, data) => {
//   console.log(data);
// });

// 5.without buffer data read
fs.readFile("ehsan/bio.txt", "UTF-8", (err, data) => {
  console.log(data);
});

// 6.rename file bio.txt to myBio.txt
// fs.rename("ehsan/bio.txt", "ehsan/myBio.txt", (err) => {
//   console.log("file rename success!");
// });

// 7.delete both file
// fs.unlink("ehsan/myBio.txt", (err) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log("file delete successfully!");
//   }
// });

// 8.delete folder
// fs.rmdir("ehsan", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("folder deleted success");
//   }
// });
