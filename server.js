const express = require('express')
const dotenv = require('dotenv')
const dummySlides = require('./images')
const bodyParser = require('body-parser')
const cors = require('cors')
const connectDB = require('./db')
const carousel = require('./model')

const app = express();
app.use(cors())
app.use(bodyParser.json());

dotenv.config({ path: './config.env' })
connectDB();
app.get('/api/carousel', (req, res) => {
    let tempArray = [];
    dummySlides && dummySlides.map(((data, index) => {
        index < req.query.slides ? tempArray.push(data) : null
    }))
    res.send({ "slides": tempArray });
})
app.post('/api/carousel', async (req, res) => {
    try {
        const data = await carousel.create(req.body)
        res.status(200).json({
            success: true,
            data: data
        })
    } catch {
        res.status(400).json({
            success: false
        })
    }
})

app.listen(3600);

process.on('unhandledRejection', (err, Promise) => {
    console.log(`Error:${err.message}`);
})

