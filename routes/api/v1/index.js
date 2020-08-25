const express = require('express');
const router = express.Router();
const db = require('../../../config/mysql');
const User = require('../../../models/user');
const data = require('../../../controllers/api/v1/middleware')
const { isSignedIn } = require('../../../controllers/api/v1/user_controller');




router.use('/user', require('./user'));
router.get('/home',isSignedIn, data,require('../../../controllers/api/v1/home_controller'));
router.get('/shop',isSignedIn, data, require('../../../controllers/api/v1/shop_controller'));
router.get('/community', isSignedIn, data, require('../../../controllers/api/v1/community_controller'));
// router.use('/event',require('./event'))


// router.get('/',(req,res) =>{
//     User.findAll()
//         .then(users => {
//             console.log(users);
//             res.json({'message': 'done'})
//         })
//         .catch(err =>{
//             console.log(err);
//             res.json({'message': 'not succesfull'})
//         })
// })
// router.get('/findone', (req,res) =>{
//     User.findOne({where:{id:1}, include: [{all:true}]})
//         .then(user =>{
//             console.log(user);
//             res.json({'message':'sucess', 'data': `${user}`})
//         })
//         .catch(err =>{
//             console.log(err);
//             res.json({'message': 'not sucess'})
//         })
// })
// router.get('/add', (req, res) =>{
//     const data = {
//         name: 'naman',
//         email: 'namanjindal99@gmail.com',
//         password: 'something'
//     }
//     let {name, email, password} = data;
//     console.log(name , email, password);
//     User.create({
//         name:'nam',
//         email:'nj@',
//         password:'enf'
//     })
//     .then(user => res.redirect('/api/v1/'))
//     .catch(err => console.log(err))
// })
module.exports = router;