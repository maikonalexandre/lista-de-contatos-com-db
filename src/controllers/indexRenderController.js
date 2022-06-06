const Database = require('../database/config');

module.exports={
    async render(req, res){
        const db = await Database();

        const nomes = await db.all(`SELECT nome FROM usuarios`);
        console.log(nomes);

        await db.close();
        res.render('index', {'nomes': nomes});
    },

    async find(req, res){
        const db = await Database();
        const name = req.body.busca;
        console.log(name);

        if(name==""){
            res.redirect('/');
        }else{

        const nomes = await db.all(`SELECT nome FROM usuarios WHERE nome == "${name}"`);
        console.log(nomes);
        
        if(nomes.length==0){
            await db.close();
            res.redirect('/');
        }else{
        await db.close();
        res.render('index', {'nomes': nomes});
        }
        }
    }
}