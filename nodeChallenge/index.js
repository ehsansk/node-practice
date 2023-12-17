const fs = require("fs");
const { encode } = require("punycode");

// create folder
// fs.mkdirSync("Ehsan");
// fs.writeFileSync("Ehsan/bio.txt", "this bio data inside bio file");
// const bio_data = fs.readFileSync("Ehsan/bio.txt").toString();
// console.log("bio_Data ===", bio_data);

// fs.renameSync("Ehsan", "thapaChallenge");

// fs.appendFileSync(
//   "thapaChallenge/bio.txt",
//   " --This text is appended by bode fs function appendFileSyn"
// );

// read file data
const data = fs.readFileSync("thapaChallenge/bio.txt", "utf-8");
console.log("data=", data);

// remove or delete file
// fs.rmSync("thapaChallenge/bio.txt", { recursive: true });

// remove or delete folder
// fs.rmdirSync("thapaChallenge");
