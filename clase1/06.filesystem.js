/* eslint one-var: 0 */

const fs = require("fs"),
  file = `${__dirname}/message.txt`;

console.log("Calling fs.readdir()..");
fs.readdir(__dirname, (err, files) => {
  console.log("Callback fs.readdir()!");
  if (err) {
    console.error(err);
  } else {
    console.log(files);
  }
});

console.log("Calling fs.watch()..");
const watcher = fs.watch(__dirname, (eventType, filename) => {
  console.log(`Callback fs.watch() with event type '${eventType}' for file '${filename}'`);
});

function unlinkFile() {
  console.log("Calling fs.unlink()..");
  fs.unlink(file, (err) => {
    console.log("Callback fs.unlink()!");
    if (err) {
      console.error(err);
    } else {
      console.log(`The file '${file}' has been removed!`);
    }
    watcher.close();
  });
}

console.log("Calling fs.writeFile()..");
fs.writeFile(file, "Hello Node.js!", (err) => {
  console.log("Callback fs.writeFile()!");
  if (err) {
    console.error(err);
  } else {
    console.log(`The file '${file}' has been saved!`);
    setTimeout(unlinkFile, 5000);
  }
});