// var mysql = require('mysql');
// const db = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'rolepermission'
// })
// module.exports = db;


//create connection to db 
const Sequelize = require('sequelize');
const db = new Sequelize('rolepermission', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    
});

module.exports = db;