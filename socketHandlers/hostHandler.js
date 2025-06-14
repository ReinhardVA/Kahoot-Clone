//vconst socket = import("socket.io")
const sessionMap  = require("../sessionStore");

module.exports = function handleHostEvents(socket, io){
    socket.on('host-join-lobby', (sessionId) => {
        socket.join(sessionId);
    })

    // socket.on('start-question', ({sessionId, question}) => {
    //     io.to(sessionId).emit('question', question);
    //     console.log(`Question started in session ${sessionId}`);
    // });

    socket.on('start-quiz', async ({sessionId, questions}) => {        
        
        let currentQuestionIndex = 0;

        const sendNextQuestion = () => {
            if(currentQuestionIndex >= questions.length){
                io.to(sessionId).emit("quiz-end");
                return;
            }
            
            const question = questions[currentQuestionIndex];
            currentCorrectAnswer = question.correctIndex;


            io.to(sessionId).emit("show-question", {
                question,
                index: currentQuestionIndex + 1
            });
            const answers = {};
            
            io.to(sessionId).emit("question-started");
            const answerListener = ({sessionId: sId, answer}) => {
                if(sId !== sessionId) return;
                answers[socket.id] = answer;
            };

            socket.on("submit-answer", answerListener);

            setTimeout(() => {
                socket.removeListener("submit-answer", answerListener);

                const scoreboard = [];

                const sessionPlayers = sessionMap[sessionId];

                for(let socketId in sessionPlayers){
                    const player = sessionPlayers[socketId];
                    const playerAnswer = player.answer;

                    if(playerAnswer === currentCorrectAnswer){
                        player.score += 1000;
                    }
                    scoreboard.push({
                        name: player.name,
                        score: player.score
                    });
                    player.answer = null;
                }

                io.to(sessionId).emit("show-scoreboard", scoreboard);
                currentQuestionIndex++;
                
                setTimeout(sendNextQuestion, 5000)

            }, 15000);
        };
        sendNextQuestion();
    });

}

