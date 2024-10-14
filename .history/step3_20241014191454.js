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

function cat(path) {
  fs.readFile(path, "utf8", (err, data) => {
    if (err) {
      console.error(`Error reading ${path}:/n ${err}`);
      process.exit(1);
    } else {
      console.log(data);
    }
  });
}

async function webCat(url) {
  try {
    const res = await axios.get(url);
    console.log(res.data);
  } catch (err) {
    console.error(`Error fetching ${url}:\n ${err}`);
    process.exit(1);
  }
}

const arg = process.argv;
let out;
let pathOrUrl;

if (args[2] === "--out") {
  out = args[3];
  pathOrUrl = args[4];
} else {
  pathOrUrl = args[2];
}

if (arg.startsWith("http")) {
  webCat(pathOrUrl, out);
} else {
  cat(pathOrUrl, out);
}
