const fs = require("fs");
const promises = require("fs/promises");
const path = require("path");

const pathFolder = `${__dirname}\\secret-folder`;

(async () => {
  const fileEntries = await promises.readdir(pathFolder, {
    encoding: "utf8",
    withFileTypes: true,
  });

  const files = await Promise.all(
    fileEntries
      .filter((item) => item.isFile())
      .map(async (file) => {
        const pathFile = `${pathFolder}\\${file.name}`;
        const fileExt = path.extname(pathFile);
        const fileInfo = await promises.stat(pathFile);
        const fileName = path.basename(pathFile, fileExt);
        console.log(
          `${fileName} - ${fileExt} - ${(fileInfo.size / 1024).toFixed(2)}kb`
        );

        return file;
      })
  );
})();
