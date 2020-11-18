const mongoose = require('../db/connection')

const ListSchema = new mongoose.Schema({
    title: {
        type: String,
        // unique: true,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: String,
    owner: {
        ref: "User",
        type: mongoose.Schema.Types.ObjectId // check this
    },
    games: {
        required: true,
        type: [Number]
    }
})

const List = mongoose.model("List", ListSchema)

module.exports = List;