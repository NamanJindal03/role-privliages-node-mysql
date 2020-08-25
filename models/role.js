const Sequelize = require('sequelize');
const db = require('../config/mysql')

const Role = db.define('role', {
    role_id:{
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    }
})


module.exports = Role;  