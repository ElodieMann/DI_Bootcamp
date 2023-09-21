const path = require("path");
const fs = require("fs");

function file() {
  data_folder = "./data";
  example_file = "example.txt";

  const full_path = path.join(data_folder, example_file);

  let fileExists = fs.existsSync(full_path);
  console.log(fileExists);
  let statsObj = fs.statSync(full_path);
  console.log("file size", statsObj.size);
  console.log("file creation time", statsObj.ctime);
}

module.exports = file;
