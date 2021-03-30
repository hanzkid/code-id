const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema( 
    {
        userName: String, 
        accountNumber: String, 
        emailAddress: String, 
        identityNumber: String 
    }
);

User.method('transform', function() {
    let data = this.toObject();

    data.id = data._id;
    delete data._id;

    return data;
});


module.exports = mongoose.model('User',User);