const Permission = require('./permission');

let allPermission = [{
    permission_id:1,
    name: 'read'
},{
    permission_id:2,
    name: 'write'
}]
module.exports = ()=>{
    Permission.bulkCreate(allPermission)
    .then(()=>{console.log('permission created succesfull')})
    .catch((err)=>{console.log(err)})
}