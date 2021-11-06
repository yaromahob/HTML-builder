const path = require("path");
const fs = require("fs");

const folderStyle = path.join(__dirname, "styles");
const folderProject = path.join(__dirname, "project-dist");
const bundleStyle = path.join(folderProject, "bundle.css");

fs.writeFile(bundleStyle, "", (err) => {
  if (err) throw err;
  console.log("файл создан");
});

fs.readdir(folderStyle, (err, files) => {
  files.forEach((files) => {
    if (path.extname(files) === ".css") {
      let readStream = fs.ReadStream(folderStyle + `\\${files}`, "utf-8");
      readStream.on("readable", (err) => {
        let data = readStream.read();
        if (data === null) {
          return;
        }
        fs.appendFile(bundleStyle, `${data}`, "utf-8", (err) => {
          if (err) throw err;
          console.log("Добавил в файл");
        });
      });
    }
  });
});
