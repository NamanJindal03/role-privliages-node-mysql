module.exports = (req,res) =>{
    if(req.user){
        res.status(200).json({'message': 'success', 'permissions': `${req.user}`})
    }else{
        res.status(403).json({'error':'not succesful'});
    }
}