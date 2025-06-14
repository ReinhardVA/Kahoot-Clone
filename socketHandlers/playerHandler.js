//const socket = import("socket.io")

const sessionMap = require('../sessionStore')
module.exports = function handlePlayerEvents(socket, io) {
    socket.on('player-join', ({ sessionId, name}) => {
        socket.join(sessionId);
        if(!sessionMap[sessionId]){
            sessionMap[sessionId] = {}
        }
        sessionMap[sessionId][socket.Id] = {
            name,
            score: 0,
            answer: null,
        };

        io.to(sessionId).emit('player-joined', name);
        
    });

    socket.on('submit-answer', ({sessionId, answer}) => {
        if(sessionMap[sessionId] && sessionMap[sessionId][socket.Id]){
            sessionMap[sessionId][socket.Id].answer = answer;
        }
    });

    socket.on("disconnect", () => {
        for(let sessionId in sessionMap) {
            if(sessionMap[sessionId][socket.id]){
                delete sessionMap[sessionId][socket.id];
            }
        }
    })
}