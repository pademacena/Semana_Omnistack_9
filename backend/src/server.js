const express = require('express');
const mongoose = require('mongoose');
const cors =require('cors');
const path =require('path');

const socketio = require('socket.io');
const http = require('http');


const routes = require('./routes');

const app = express();
const server = http.Server(app);
const io = socketio(server); 

//conexcao com o mongodb
mongoose.connect('mongodb+srv://<usuario>:<senha>@omnistack9-wgw7f.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const connectUsers = {};

io.on('connection', socket => {

    const { user_id } = socket.handshake.query;

    connectUsers[user_id] = socket.id;

    // enviar mensagem mara o navegador 
    // socket.emit('hello', 'World');

    // ler mensagem do navegador
    socket.on('omni', data => {
        console.log(data);
    })
});

app.use((req, res, next) => {
    req.io = io;
    req.connectedUsers = connectUsers;

    return next();
});

// GET, POST, PUT, DELETE

// req.query = acessar query params (para filtros)
// req.params = Acessar route params (para editar ou deletar)
// req.body = Acessat corpo da requisicao (para criacao, edicao)

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/files', express.static(path.resolve(__dirname, '..','uploads')));

server.listen(3333);