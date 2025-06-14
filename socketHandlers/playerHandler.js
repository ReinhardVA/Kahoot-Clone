//const socket = import("socket.io")

module.exports = function handlePlayerEvents(socket, io) {
    socket.on('player-join', ({ sessionId, name}) => {
        socket.join(sessionId);
        io.to(sessionId).emit('player-joined', name);
        console.log(`Player ${name} joined session ${sessionId}`);
    });

    socket.on('submit-answer', (data) => {
        console.log('Answer received:', data)
    })
}