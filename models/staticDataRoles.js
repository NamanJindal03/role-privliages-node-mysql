const Role = require('./role');

let allRoles = [{
    role_id:1,
    name: 'user'
},{
    role_id:2,
    name: 'admin'
}]
module.exports = ()=>{
    Role.bulkCreate(allRoles)
    .then(()=>{console.log('role succesfull')})
    .catch((err)=>{console.log(err)})
}