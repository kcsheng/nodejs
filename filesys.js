const fs = require("fs");

// read a file
fs.readFile("./docs/blog1.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});

// write an existing file
fs.writeFile("./docs/blog1.txt", "HELLO WORLD", () => {
  console.log("File was written.");
});

fs.writeFile("./docs/blog2.txt", "HELLO WORLD AGAIN", () => {
  console.log("File was written.");
});

// directories (toggle between creation and deletion)
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder created!");
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("folder deleted!");
  });
}

//delete a file
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    }
    console.log("file deleted!");
  });
}
