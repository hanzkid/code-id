const { response } = require('express');
const user = require('../models/user');
const RedisInstance = require('../helpers/cache');

class userController {

    static index = async(req,res,next) => {
        try {
            let cache = await RedisInstance.getCache('users');
            if(!cache){
                let userData = await user.find({});
                userData = userData.map(data => data.transform());
                cache = await RedisInstance.setCache('users',userData);
            }
            res.status(200).json(cache);
        } catch (error) {
            next(error);
        }
    }

    static create = async(req,res,next) => {
        try {
            let { userName, accountNumber, emailAddress, identityNumber } = req.body
            let userData = new user({ userName, accountNumber, emailAddress, identityNumber });
            await userData.save();
            await RedisInstance.delCache('users');
            res.status(201).json({ userData : userData.transform() });
        } catch (error) {
            next(error)
        }
    }

    static getByAccountNumber = async(req,res,next) => {
        try {
            let { accountNumber } = req.params;
            let cache = await RedisInstance.getCache('user_account_number' + accountNumber);
            if(!cache){
                const userData = await user.findOne({ accountNumber });
                if(!userData)
                    throw { name: 'custom', message: 'Account not found', statusCode: 404 }
                cache = await RedisInstance.setCache('user_account_number' + accountNumber,userData.transform());
            }
            res.status(200).json({ userData: cache });
        } catch (error) {
            next(error)
        }
    }

    static getByIdentityNumber = async(req,res,next) => {
        try {
            let { identityNumber } = req.params;
            let cache = await RedisInstance.getCache('user_identity_number' + identityNumber);
            if(!cache){
                const userData = await user.findOne({ identityNumber });
                if(!userData)
                    throw { name: 'custom', message: 'Account not found', statusCode: 404 }
                cache = await RedisInstance.setCache('user_identity_number' + accountNumber,userData.transform());
            }
            res.status(200).json({ userData: cache });
        } catch (error) {
            next(error)
        }
    }

    static update = async(req,res,next) => {
        try {
            let { id } = req.params;
            let { userName, accountNumber, emailAddress, identityNumber } = req.body;
            
            let userData = await user.findOneAndReplace({ _id:  id },{ userName, accountNumber, emailAddress, identityNumber });
            await RedisInstance.delCache('users');

            res.status(200).json({ userData: userData.transform() });
        } catch (error) {
            next(error)
        }
    }

    static patch = async(req,res,next) => {
        try {
            let { id } = req.params;
            let { userName, accountNumber, emailAddress, identityNumber } = req.body;
            let updatedValue = {};
            if(userName)
                updatedValue.userName = userName;
            if(accountNumber)
                updatedValue.accountNumber = accountNumber;
            if(emailAddress)
                updatedValue.emailAddress = emailAddress;
            if(identityNumber)
                updatedValue.identityNumber = identityNumber;
            let userData = await user.findOneAndUpdate({ _id:  id },updatedValue,{
                new: true
            });
            await RedisInstance.delCache('users');
            res.status(200).json({ userData: userData.transform() });
        } catch (error) {
            next(error)
        }
    }

    static destroy = async(req,res,next) => {
        try {
            let { id } = req.params;
            await user.deleteOne({_id : id});
            await RedisInstance.delCache('users');
            res.status(200).json({ message: 'Success' });
        } catch (error) {
            next(error);
        }
    }
    
}

module.exports = userController