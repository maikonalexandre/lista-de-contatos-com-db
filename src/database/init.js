const Database = require('./config');
const initDb = {
    async init(){
        const db = await Database();

        await db.exec(`CREATE TABLE usuarios(
            nome TEXT PRIMARY KEY
        )`);

        await  db.exec(`CREATE TABLE contatos(
           title TEXT,
           contato TEXT,
           npessoa TEXT,
           CONSTRAINT fk_UsCont FOREIGN KEY (npessoa) REFERENCES usuarios (nome)
        )`);
        await db.close();
    }
    }
initDb.init();
