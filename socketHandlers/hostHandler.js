//vconst socket = import("socket.io")

module.exports = function handleHostEvents(socket, io){
    socket.on('host-join-lobby', (sessionId) => {
        socket.join(sessionId);
        console.log(`Host joined session ${sessionId}`)
    })

    socket.on('start-question', ({sessionId, question}) => {
        io.to(sessionId).emit('question', question);
        console.log(`Question started in session ${sessionId}`);
    });

}

