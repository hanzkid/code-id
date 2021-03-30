const { verifyToken } = require('../helpers/jwt');
const authentication = async(req,res,next) => {
    try {
        let decoded = verifyToken(req.headers.token);
        if(!decoded){
            throw { name: 'custom', message: 'Invalid Acces Token', statusCode : 401 }
        }
        next()
    } catch (error) {
        next(error)
    }

}

module.exports = authentication;