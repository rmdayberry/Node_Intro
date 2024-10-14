const fs = require("fs");
const axios = require("axios");

function outputFile(text, out) {
  fs.writeFile(out, text, "utf8", (err) => {
    if (err) {
      console.error(`Couldn't write to ${out}:\n ${err}`);
      process.exit(1);
    }
  });
}
