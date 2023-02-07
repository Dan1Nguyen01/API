require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');

const userRouter = require('./routes/user-route/user-route');
const albumRouter = require('./routes/album-route/album-route');
const artistRouter = require('./routes/artist-route/artist-route');
const collectionRouter = require('./routes/collection-route/collection-route');
const tastepRouter = require('./routes/tastep-route/tastep-route');
const playlistRouter = require('./routes/playlist-route/playlist-route');
const songRouter = require('./routes/song-route/song-route');
const userlogin = require('./routes/user-login-route/user');
const { loginUser } = require('./controllers/userController/accountController');

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


//FOR USER
app.use('/api/user', loginUser)



//FOR ADMIN
//user
app.use('/api/users', userRouter);

// album
app.use('/api/albums',albumRouter);

//artist
app.use('/api/artists',artistRouter);

//collection
app.use('/api/collections',collectionRouter);

//taste profile
app.use('/api/tasteps',tastepRouter);

// //playlist
app.use('api/playlists',playlistRouter);

//song
app.use('/api/songs', songRouter);




app.listen(process.env.PORT, '0.0.0.0', ()=> {
    console.log(`Listening to port `+process.env.PORT )
})


