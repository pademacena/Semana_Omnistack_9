const express = require('express');
const mongoose = require('mongoose');
const cors =require('cors');
const path =require('path');


const routes = require('./routes');

const app = express();

//conexcao com o mongodb
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack9-wgw7f.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// GET, POST, PUT, DELETE

// req.query = acessar query params (para filtros)
// req.params = Acessar route params (para editar ou deletar)
// req.body = Acessat corpo da requisicao (para criacao, edicao)

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/files', express.static(path.resolve(__dirname, '..','uploads')));

app.listen(3333);