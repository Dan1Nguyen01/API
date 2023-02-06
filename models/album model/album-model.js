const mongoose = require('mongoose')

const albumSchema = new mongoose.Schema({
    id:{
        type:String,
        required: [true,`Please provide album's id`],
        minlength: 16,
        maxlength:16,
        unique:true
    },

    albumName:{
        type:String,
        required:[true,`Please provide album's name`],
        maxlength:75,
    },

    albumArt: {
            type:String,
            data:Buffer
    },

    totalTracks:{
        type:Number,
        required: [true, `Please provide number of tracks`],
    },

    isPublished:{
        type: Boolean,
        require:true
    },

    publishDate: {
        type:Date,
    },

    releaseType:{
        type:String,
        enum:['Album','EP','Single']
    },
    albumSongs:{
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'Song',
    }

})

module.exports = mongoose.model('Album',albumSchema);