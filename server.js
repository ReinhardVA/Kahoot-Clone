const http = require('http');
const socketIo = require('socket.io')
const app = require('./app')
const socketHandler = require('./socket')

const PORT = process.env.PORT || 3000

const server = http.createServer(app);
const io = socketIo(server)

socketHandler(io)

server.listen(PORT, () => {
    console.log('Server started on port ', PORT)
})
