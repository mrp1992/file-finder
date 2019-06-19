const fs = require("fs");
const path = require("path");

const filesAndFoldersExclusionList = ["node_modules", ".git", "todoSearch","dist"];
const fileList = [];

exports.fetchAllFilePaths = directory => {

  if (!fs.existsSync(directory)) {
    console.log("No such directory");
    return;
  }

  const files = fs.readdirSync(directory);
  files.forEach(file => {
    if (!filesAndFoldersExclusionList.includes(file)) {
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
