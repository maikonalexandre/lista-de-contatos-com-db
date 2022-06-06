const Database = require('../database/config')

module.exports= {
 async createview(req,res){
   res.render('novonome');
},

async create(req, res){
    const db = await Database();
    const name = req.body.nome;
    console.log(name);

    
     const IsNome = await db.all(`SELECT nome FROM usuarios WHERE nome == "${name}"`);
     console.log(IsNome);

    if(IsNome.length==0){
        await db.run(`INSERT INTO usuarios(
            nome
            )VALUES(
               "${name}"
            )`);



            console.log('salvo com sucesso');

            res.redirect(`/novocontato/${name}`);


    }else{
        res.redirect('nomejaexistente');
    }
    await db.close();
}
}