const mongoose = require('mongoose')

const songSchema = new mongoose.Schema(
  {
    id: {
        type: String,
        required: [true, `Please provide song's id`],
        minLength: 16,
        maxlength: 16,
        unique: true
    },
    songName:{
        type: String,
        required: [true, `Please provide song's name`],
        maxlength: 75,
    },
    songDuration: {
        type: Number,
        required: [true, `Please provide song's duration`]
    },
    songGenre: {
        type: String,
        required: [true, `Please provide song's genre`],
        maxlength: 50
        
    },
    highlightStart: {
        type: Number       
    },
    highlightEnd: {
        type: Number
    },
    songArtist: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    isPublished: {
        type: Boolean
    },
    Likes: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User'
    },
    Dislikes: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User'
    },
    songPath: {
        type: String,
        required: [true, `Please provide song's path`],
        songData: {
            data: Buffer
        }
    }


  }

)

module.exports = mongoose.model('Song',songSchema);