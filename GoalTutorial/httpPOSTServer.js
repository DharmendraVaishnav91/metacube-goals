
const http = require('http')
const throughMap = require('through2-map')
const port = process.argv[2]

const server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        req.getBody().pipe(throughMap((chunk) => {
            return chunk.toString().toUpperCase()
        })).pipe(res)
    }
})

server.listen(port)