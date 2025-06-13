const socket = import("socket.io")

module.exports = function(io) {
    io.on('connection', (socket) => {
        console.log('New client connected');

        socket.on('host-join-lobby', (sessionId) => {
            socket.join(sessionId);
            console.log(`Host joined lobby ${sessionId}`);
        })

        socket.on('player-join', ({ sessionId, name}) => {
            socket.join(sessionId);
            io.to(sessionId).emit('player-joined', name);
        })
        
        socket.on('start-question', ({sessionId, question}) => {
            io.to(sessionId).emit('question', question);
        });

        socket.on('submit-answer', data => {
            // handle submission update scoreboard
            console.log('Answer received: ', data)
        })

        socket.on('disconnect', () =>{
            console.log('Client disconnected');
        });
    });
};