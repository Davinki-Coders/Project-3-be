const express = require('express')
const router = express.Router()
const HeroList = require('../models/hero-list')


// Index: Get all heroList

router.get("/", (req, res, next) => {
    HeroList.find({})
        .populate("owner")
        .then((heroLists) => res.json(heroLists))
        .catch(next);
})