const fs = require("fs");
const axios = require("axios");

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
    const res = await axios.getAdapter(url);
    console.log(res.data);
  } catch (err) {
    console.error(`Error fetching ${url}:\n ${err}`);
    process.exit(1);
  }
}

const arg = process.argv[2];

if (arg.startsWith("http")) {
  webCat(arg);
} else {
  cat(arg);
}
