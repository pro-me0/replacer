let fs = require('fs'),
logic = (file, string, replace) => {
  let ff = fs.readFileSync(file, 'utf8'),
  fl = ff.replaceAll(`${string}`, replace);
  fs.writeFileSync(file, fl);
}

console.log(process.argv)
logic(process.argv[2], process.argv[3], process.argv[4])