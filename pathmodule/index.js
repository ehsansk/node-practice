const path = require("path");

const imagepath = path.basename(
  "C:/Users/USER/Desktop/IORTA TECHNOLIGY/node-practice/node-practice/pathmodule/index.js"
);

console.log("imagepath ==", imagepath);

// let imageTypes = [".png", ".jpg", ".jpeg"];
// function isImage(filepath) {
//   let filetype = path.extname(filepath);

//   if (imageTypes.includes(filetype)) {
//     console.log("file type is correct");
//   } else {
//     console.log("wrong file type");
//   }
// }
// isImage("image.web");

console.log(path.dirname(imagepath));
console.log("baseName =", path.basename(imagepath));
console.log("extname =", path.extname(imagepath));
const parsePath = path.parse(imagepath);
console.log("fileName =", parsePath.name);
console.log("root =", parsePath.root);
