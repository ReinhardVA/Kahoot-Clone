//const socket = import("socket.io")

const sessions = require('../sessionStore')
module.exports = function handlePlayerEvents(socket, io) {
    socket.on('player-join', ({ sessionId, name}) => {
        socket.join(sessionId);
        if(!sessions[sessionId]){
            sessions[sessionId] = {}
        }
        sessions[sessionId][socket.Id] = {
            name,
            score: 0,
            answer: null,
        };

        io.to(sessionId).emit('player-joined', name);
        
    });

    socket.on('submit-answer', ({sessionId, answer}) => {
        if(sessions[sessionId] && sessions[sessionId][socket.Id]){
            sessions[sessionId][socket.Id].answer = answer;
        }
    });

    socket.on("disconnect", () => {
        for(let sessionId in sessions) {
            if(sessions[sessionId][socket.id]){
                delete sessions[sessionId][socket.id];
            }
        }
    })
}