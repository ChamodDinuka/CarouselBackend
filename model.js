const mongoose = require('mongoose')

const carouselSchema = new mongoose.Schema({
    image:String,
    title:String,
    subTitle:String
})

module.exports = mongoose.model('carousel',carouselSchema)