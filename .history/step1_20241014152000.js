const fs = require("fs");

function cat(path){
  fs.readFile(path, 'utf8', (err,data)=>
    if(err) {
      console.error()
    }
  )
}