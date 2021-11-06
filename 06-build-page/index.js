const fs = require("fs");
const path = require("path");

const folderAssets = path.join(__dirname, "assets");
const folderComponents = path.join(__dirname, "components");
const folderStyle = path.join(__dirname, "styles");
const myHtml = path.join(__dirname, "template.html");
let readStream = fs.ReadStream(myHtml, "utf-8");
console.log(myHtml);

// fs.readdir(myHtml, (err, files) => {
//   readStream.on("readable", (err) => {
//     let data = readStream.read();
//     if (data === null) {
//       return;
//     }
//     if (data === "{{header}}") {
//       console.log("ALLO", data);
//     }
//     // console.log(data);
//   });
// });
