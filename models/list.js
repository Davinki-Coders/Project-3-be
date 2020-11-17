const mongoose = require('../db/connection')

const ListSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    author: String,
    description: {
        type: String,
        required: true,
    },
    imageUrl: String,
    owner: {
        ref: "User",
        type: mongoose.Schema.Types.ObjectId // check this
    }
})

const List = mongoose.model("List", ListSchema)

module.exports = List;