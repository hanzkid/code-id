const errorHandler = (err,req,res,next) =>{
    if(err.name){
        if(err.name == 'custom'){
            res.status(err.statusCode).json({ message : err.message });
        }
        else{
            res.status(500).json('Internal Server Error');
        }
    }else{
        res.status(500).json('Internal Server Error');
    }
}

module.exports = errorHandler