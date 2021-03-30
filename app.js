if(process.env.NODE_ENV != 'production')
    require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoute');
const errorHandler = require('./middleware/errorHandler');

const app = express()
const port = process.env.PORT || 3000

mongoose.connect(process.env.MONGO_CONNURL, {useNewUrlParser: true, useUnifiedTopology: true});

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(userRoute);

app.use(errorHandler);
app.listen(port, () => {
    console.log(`Code.id user service listening at http://localhost:${port}`)
})
  