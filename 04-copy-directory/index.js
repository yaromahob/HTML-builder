const fs = require("fs");
const path = require("path");

const pathFolder = `${__dirname}\\files`;
const newPathFolder = `${__dirname}\\files-copy`;

fs.mkdir(newPathFolder, {}, (err) => {
  if (err) {
    fs.readdir(newPathFolder, (err, files) => {
      files.forEach((file) => {
        fs.rm(`${newPathFolder}\\${file}`, () => {});
      });
    });
  }
});

setTimeout(() => {
  fs.readdir(pathFolder, (err, files) => {
    files.forEach((file) => {
      fs.copyFile(
        `${pathFolder}\\${file}`,
        `${newPathFolder}\\${file}`,
        () => {}
      );
    });
  });
}, 250);
