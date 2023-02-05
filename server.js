require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/user-route');

const app = express();
mongoose.connect(process.env.DB_URL, {useNewUrlParser: true})
    .then(()=>{
        console.log('Database connected')
    })
    .catch(error=>{
        console.error('Database connect failed, error: ', error)
    })
//middle ware
app.use(express.json());
app.use((req,res,next) =>{
    console.log(req.path, req.method);
    next();
})



//routes
app.use('/api/users', userRouter);


app.listen(process.env.PORT, '0.0.0.0', ()=> {
    console.log(`Listening to port `+process.env.PORT )
})


