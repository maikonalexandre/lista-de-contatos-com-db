const sqlite3 = require('sqlite3');
const {open} =  require('sqlite');

module.exports = ()=>
    open({
    filename: './src/database/listactt-database.sqlite',
    driver: sqlite3.Database,
    });
