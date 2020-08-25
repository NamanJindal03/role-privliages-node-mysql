const Sequelize = require('sequelize');
const db = require('../config/mysql')

const User = require('./user');
const Role = require('./role');
const Permission = require('./permission');
const role_permission = require('./role_permission')

module.exports = db;