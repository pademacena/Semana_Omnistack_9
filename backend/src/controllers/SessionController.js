const User = require('../models/User');

module.exports = {
    async store(req, res) {
        const { email } = req.body;

        let user = await User.findOne({ email });

        if (!user) {

            const user = await User.create({ email });
        }

        return res.json(user);
    }
};







// index, show, store, update, destroy
// index - retorna uma listagem de sessoes
// show - listar uma unica sessao
// store - criar uma sessao 
// update - alterar sessao
// destroy - remover ou alterar sessao


// para usar o await eu preciso dizer que a funcao e asincrona usando o aprametro async