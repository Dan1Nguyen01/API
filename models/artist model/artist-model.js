const mongoose = require('mongoose');

const artistSchema = mongoose.Schema({
        id: {
            type: String,
            required: [true, `Please provide artist's id`],
            minLength: 16,
            maxLength: 16,
            unique: true
        },
        userID:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        artistName: {
            type: String,
            required: [true, `Please provide artist's name`],
            maxLength: 50
        },
    
        artistFollowers: {
            type: Number
    
        },
        albumArtist: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Artist'
        },
        albumArt: {
            type: String,
            data: Buffer
        },
        totalTracks: {
            type: Number,
            required: [true, `Please provide albums's length`]
        },
        isPublished: {
            type: Boolean
        },
        publishDate: {
            type: Date
        },
        releaseType: {
            type: String, 
            enum: ['Album', 'EP', 'Single']
        },
        albumSongs: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'Song'
        }
    
      }
    
    )
    
module.exports = mongoose.model('Artist',artistSchema)