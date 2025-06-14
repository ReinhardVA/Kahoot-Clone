const socket = import("socket.io")
const hostHandler = require('./socketHandlers/hostHandler')
const playerHandler = require('./socketHandlers/playerHandler')

module.exports = function(io) {
    io.on('connection', (socket) => {
        console.log('New client connected');
        
        hostHandler(socket, io);
        playerHandler(socket, io)
        
        socket.on('disconnect', () =>{
            console.log('Client disconnected');
        });
    });
};