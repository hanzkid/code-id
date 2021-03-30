const user = require('../models/user');
var mongoose = require('mongoose');

const checkIsDataExist = async(req,res,next) => {
    try {
        let { id } = req.params;
        if(!mongoose.isValidObjectId(id))
            throw { name: 'custom', message: 'Invalid Object Id', statusCode : 400 }
        let userData = await user.findOne({ _id : id });
        if(!userData){
            throw { name: 'custom', message: 'Data not found', statusCode : 404 }
        }
        next()
    } catch (error) {
        next(error)
    }

}

module.exports = checkIsDataExist;