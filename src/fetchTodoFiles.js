const fs = require("fs");
const path = require("path");
const exclusionList = require("./exclusionListUtil");

const fileList = [];

exports.fetchAllFilePaths = directory => {

  if (!fs.existsSync(directory)) {
    console.log("No such directory");
    return;
  }

  const files = fs.readdirSync(directory);
  files.forEach(file => {
    if (!exclusionList.isFileExcluded(file)) {
      const fileName = path.join(directory, file);
      if (fs.lstatSync(fileName).isDirectory()) {
        this.fetchAllFilePaths(fileName);
      } else {
        if (
          fs
            .readFileSync(fileName)
            .toString()
            .includes("TODO")
        ) {
          fileList.push(fileName);
        }
      }
    }
  });

  return fileList;
};
