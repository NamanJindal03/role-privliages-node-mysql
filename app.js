const express = require('express');
//const mysql = require('mysql');
const Sequelize = require('sequelize');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const port = '3000';
//create db
let db = require('./config/mysql');
db = require('./models/index')

app.use(bodyParser.json())
app.use(cookieParser());
//Enables All Cors Request
app.use(cors());
app.use('/', require('./routes'))



//test db
db.authenticate()
    .then(() => console.log('Mysql Connected...'))
    .catch(err => console.log('Error:', err))

db.sync(
    //{force: true}
) 
    .then(()=>{
        console.log('succesfull');

        if(db.models.role){
            
            db.models.role.findAll()
                .then(roles => {
                    if(roles.length == 0){
                        require('./models/staticDataRoles')();
                    }
                })
                .catch(err =>{
                    console.log(err);
                    console.log("error in setting date in the roles")
                })
        }
        if(db.models.permission){
            db.models.permission.findAll()
                .then(permissions => {
                    if(permissions.length == 0){
                        require('./models/staticDataPermissions')();
                    }
                })
                .catch(err =>{
                    console.log(err);
                    console.log("error in setting date in the roles")
                })
        }
        if(db.models.role_permission){
            db.models.role_permission.findAll()
                .then(role_permissions =>{
                    if(role_permissions.length == 0){
                        require('./models/staticDataRoles_Permissions')();
                    }
                })
                .catch(err =>{
                    console.log(err);
                    console.log("error in setting data in the roles_permission")
                })
        }
    })
    .catch((err)=>{
        console.log(err);
    })

const {associations} = require('./models/associations');
associations(db);
// db.connect((err)=>{
//     if(err){
//         throw err;
//     }
//     console.log('Mysql connected') 
// })
app.listen(port, ()=>{
    console.log(`server started on port: ${port} `)
})