const User = require('../../../models/user');
const db = require('../../../config/mysql')
module.exports = async(req, res, next) =>{

    // console.log("something", JSON.stringify(req.cookies.token));
    // console.log("something", JSON.stringify(req.auth));
    // console.log("something", JSON.stringify(req.headers.authorization.split(' ')[1]))
    try{
        const userData = await db.query(`select * from users as u join role_permissions as rp on u.roleRoleId=rp.roleRoleId join permissions as p on p.permission_id= rp.permissionPermissionId where u.id =${req.auth._id}`,
        { type: db.QueryTypes.SELECT })
        let permisions = [];
        for(let data in userData){
            console.log(data);
            permisions.push(userData[data].name);
        }
        console.log(permisions);
        req.user = permisions;
        next();
    }
    catch(err){
        console.log(err);
        res.status(403).json({'error':'failed'});
    }
    //const id = req.auth._id;
    //console.log("id",id);
    // User.findOne({where:{id:id}, include: [{all:true}]})
    //     .then(user =>{
    //         // console.log("naman",user.role.dataValues);
    //         // const role = user.role.dataValues.name;
    //         // console.log(db.sequilize)
    //         // if(role == 'user'){
    //         //     res.json({'message':'sucess', 'data': `I am a user`})
    //         // }
    //         // else if(role == "admin"){
    //         //     res.json({'message': 'success', 'data': 'I am an admin'})
    //         // }
    //     })
    //     .catch(err =>{
    //         console.log(err);
    //         res.json({'message': 'not sucess'})
    //     }) 
}