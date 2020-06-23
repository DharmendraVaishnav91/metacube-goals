const http = require('http')
const fs = require('fs')

const port= process.argv[2]
const resFile= process.argv[3]
const server = http.createServer((req, res) => {
    var rs = fs.createReadStream(resFile)
    rs.pipe(res)
})

server.listen(process.argv[2])