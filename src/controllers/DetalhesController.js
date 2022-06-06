const Database = require('../database/config');

module.exports={
    async view(req, res){
        const name = req.params.nome;

        console.log(name);

        const db = await Database();

        const contatos = await db.all(`SELECT title, contato FROM contatos WHERE npessoa == "${name}"`);
        console.log(contatos);



        await db.close();
        res.render('detalhes', {'contatos': contatos, 'name': name});
    }
}