const JWT = require('jsonwebtoken');

module.exports = function auth(req,res,next){
    const token = req.header('X-Auth-Token');
    if(!token) return res.status(401).send('Access Deniued');

    try{
        const verified = JWT.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        // to check another request
        next();
    }catch(err){
        res.status(400).send('Invalid Token');
    }
}