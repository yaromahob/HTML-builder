const fs = require("fs");

let readStream = fs.ReadStream(__dirname + "/text.txt", "utf-8");

readStream.on("readable", function () {
  let data = readStream.read();
  if (data === null) {
    return;
  }
  console.log(data);
});
