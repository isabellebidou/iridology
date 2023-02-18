module.exports = (req,res,next) => {
    if (!req.user.type == 'admin') {
        return res.status(401).send({error: 'restricted access'});
        
    }
    next();
}