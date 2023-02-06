const mongoose= require('mongoose');

const playlistSchema = new mongoose.Schema(
  {
    _id: {
        type: String,
        required: [true, `Please provide playlist's id`],
        minLength: 16,
        maxLength: 16,
        unique: true
    },
    playlistName:{
        type: String,
        required: [true, `Please provide playlist's name`],
        maxlength: 75,
    },
    playlistDuration: {
        type: Number,
        required: [true, `Please provide playlist's duration`],
    },
    playlistCreator: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'

    },
    isPublished: {
        type: Boolean
    },
    playlistSongs: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Song'
    }
  }

)
  module.exports = mongoose.model('Playlist', playlistSchema);