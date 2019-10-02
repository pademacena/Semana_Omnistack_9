const express = require('express');
const mongoose = require('mongoose');
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

app.use(express.json());
app.use(routes);

app.listen(3333);