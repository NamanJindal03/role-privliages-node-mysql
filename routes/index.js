const express = require('express');
const router = express.Router();

router.use('/api', require('./api'))
router.get('/', (req,res)=>{
    res.json({'message':'working'})
})
module.exports = router;
