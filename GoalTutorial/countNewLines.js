const fs = require('fs')

const fileContent = fs.readFileSync(process.argv[2])
const noOfLines = fileContent.toString().split('\n').length-1
console.log(noOfLines)