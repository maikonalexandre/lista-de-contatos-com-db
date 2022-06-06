const Database = require('../database/config');
module.exports ={
    async deletenome(req, res){
        const name = req.params.nome;
        console.log(name);
         const db = await Database();
        await db.run(`DELETE FROM usuarios WHERE nome =="${name}"`);
        await db.run(`DELETE FROM contatos WHERE npessoa == "${name}"`)



         await db.close();
         res.redirect('/');
       
    },
   async deletecontato(req, res){
        const contato = req.params.nome;
        const db = await Database();

        await db.run(`DELETE FROM contatos WHERE title == "${contato}"`);


        await db.close();
        res.redirect("/detalhes/"+ req.params.contato);
    }
}