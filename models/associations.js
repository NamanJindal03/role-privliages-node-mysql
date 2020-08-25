function roleAssociations(role, permission, user, role_permission){
    //role.hasMany(permission);
    role.hasOne(user);
    role.hasMany(role_permission);
}
function userAssociations(role, user, role_permission){
    user.belongsTo(role,
        {
        foreignKey:{
            defaultValue: 1,
            allowNull: false
        }
    }
    );
    //user.belongsTo(role_permission)
}
function permissionAssociations(role, permission, user, role_permission){
    permission.belongsTo(role,
    //     {
    //     foreignKey:{
    //         name: 'role_id',
    //         defaultValue: 2,
    //         allowNull: false
    //     }
    // }
    )
    permission.hasMany(role_permission);
}
function role_permissionAssociations(role, permission, user, role_permission){
    role_permission.belongsTo(role);
    role_permission.belongsTo(permission);
}
function associations(db) {
	const { role, user, permission , role_permission} = db.models;

    roleAssociations(role, permission, user,role_permission);
    userAssociations(role, user, role_permission);
    //permissionAssociations(role, permission, user, role_permission);
    role_permissionAssociations(role, permission, user, role_permission)
	// orchestra.hasMany(instrument);
	// instrument.belongsTo(orchestra);
}

module.exports = { associations };
