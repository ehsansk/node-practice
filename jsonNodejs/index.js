const fs = require("fs");

const biodata = {
  name: "ehsan",
  age: 25,
  languange: "Node js",
};

// console.log(biodata.languange);

// convert object to json
// const jsonData = JSON.stringify(biodata);
// console.log("jsondata==", jsonData);

// convert json to object
// const objData = JSON.parse(jsonData);
// console.log("objdata ==", objData);

//1. covert to JSON
//2.  add to other file
//3. read file
//4. again convert to object
//5. console.log

const jsonData = JSON.stringify(biodata);
// this run in loop so terminate
fs.writeFile("json1.json", jsonData, (err) => {
  console.log("data added");
});

fs.readFile("json1.json", "utf-8", (err, data) => {
  console.log(data);
  const originData = JSON.parse(data);
  console.log(originData);
});
