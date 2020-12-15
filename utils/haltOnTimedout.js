module.exports = function haltOnTimedOut(req,res,next){
    if(!req.timedOut) next();
}