const { generateToken } = require('../helpers/jwt');

class tokenController{

    static generate = (req,res,next) => {
        try {
            res.status(200).json({ access_token : generateToken(new Date().getTime()) });
        } catch (error) {
            next(error);
        }
    }

}

module.exports = tokenController