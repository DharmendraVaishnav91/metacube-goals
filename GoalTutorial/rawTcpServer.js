const net = require('net')

const server = net.createServer((socket) => {
    const date = new Date()
    const dateFormat = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
    socket.end(dateFormat)
})

server.listen(process.argv[2])