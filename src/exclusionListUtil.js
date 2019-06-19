const fs = require("fs");
const path = require("path");

exports.isFileExcluded = fileOrFolderName => {
    const fileListJson = JSON.parse(fs.readFileSync(exclusionListFile));

    return fileListJson.exclude.some(
      excludedFile => excludedFile === fileOrFolderName
    );
};

const exclusionListFile = path.join(__dirname, "exclusionList.json");
