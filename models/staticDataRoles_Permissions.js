const Role_permission = require('./role_permission');

let allRoles_Permission = [{
    roleRoleId:1,
    permissionPermissionId: 1
},{
    roleRoleId:2,
    permissionPermissionId: 1
},{
    roleRoleId:2,
    permissionPermissionId: 2
}]
module.exports = ()=>{
    Role_permission.bulkCreate(allRoles_Permission)
    .then(()=>{console.log('roles_permission created succesfull')})
    .catch((err)=>{console.log(err)})
}