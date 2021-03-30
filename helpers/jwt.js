const jwt = require('jsonwebtoken');

function generateToken(payload){
    return jwt.sign(payload,process.env.JWT_SECRET);
}

function verifyToken(payload){
    try{
        let data = jwt.verify(payload, process.env.JWT_SECRET);
        return data;
    }catch(err){
        return null;
    }
    
}

module.exports = { generateToken, verifyToken }