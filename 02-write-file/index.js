const fs = require("fs");
const path = require("path");
const process = require("process");
let readline = require("readline");

let createTextFile = readline.createInterface(process.stdin, process.stdout);

fs.writeFile(path.join(__dirname, "text.txt"), "", (err) => {
  if (err) throw err;
});

createTextFile.question("Your text: ", (userInput) => {
  if (userInput.trim() === "exit") {
    createTextFile.close();
  } else {
    fs.appendFile(path.join(__dirname, "text.txt"), userInput + " ", (err) => {
      if (err) throw err;
    });
    createTextFile.on("line", (userInput) => {
      if (userInput.trim() == "exit") {
        createTextFile.close();
      } else {
        fs.appendFile(
          path.join(__dirname, "text.txt"),
          userInput + " ",
          (err) => {
            if (err) throw err;
          }
        );
      }
    });
  }
});

createTextFile.on("close", () => {
  console.log("file saved");
});
