const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

io.on('connection', (socket) => {
    console.log('Cliente conectado');

    socket.on('executeLua', (luaCode) => {
        console.log('Código Lua recebido:', luaCode);
        
        // Aqui você pode processar o código Lua como quiser, talvez validar ou fazer alguma transformação
        
        // Por enquanto, vamos apenas enviar o código Lua de volta para o Roblox Studio
        io.emit('luaResult', luaCode);
    });

    socket.on('disconnect', () => {
        console.log('Cliente desconectado');
    });
});

server.listen(PORT, () => {
    console.log(`Servidor ouvindo na porta ${PORT}`);
});
