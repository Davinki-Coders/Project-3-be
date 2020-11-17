const mongoose = require('mongoose')

// this will be landing page list w/ links to individual lists

const heroListSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
    },
    author: String,
    description: String,
    imageUrl: String,
    owner: {
        ref: "User",
        type: mongoose.Schema.Types.ObjectId // check this
    }
})

const HeroList = mongoose.model("HeroList", heroListSchema)

module.exports = HeroList;