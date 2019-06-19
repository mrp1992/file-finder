const path = require("path");
const fetchTodoFiles = require("./fetchTodoFiles");
const currentDirectory = () => path.join(__dirname, "/../..");

const fileList = fetchTodoFiles.fetchAllFilePaths(currentDirectory());

fileList.forEach(file => console.log(file));
