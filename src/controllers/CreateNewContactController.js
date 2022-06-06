const Database = require('../database/config');

module.exports={
    async create(req, res){
        
        const nome= req.params.nome;
        console.log(nome);
        res.render('novocontato', {'name': nome});
    },
    async save(req, res){
        const db = await Database();
        const titulo = req.body.title;
        const contact = req.body.contato;
        
        const nome = req.params.nome;
        console.log(titulo, contact, nome);



        // const IsTitulo = await db.all(`SELECT title AND contato FROM contatos WHERE title == "${titulo}" OR contato == "${contact}"`);
        // console.log(IsTitulo);
        
       // await db.run(`INSERT INTO contatos WHERE npessoa == "${nome}" (title, contato) VALUES ("${titulo}", "${contact}")`);
    
        await db.run(`INSERT INTO contatos (title, contato, npessoa) VALUES ("${titulo}", "${contact}", "${nome}")`);
        //INSERT INTO user (id_user, nome, email, senha) VALUES (DEFAULT, "Fulano", "foo@lano.com", "1234");

        console.log(titulo, contact, nome);
        await db.close();
        res.redirect('/');
    }
}