const mongoose = require('mongoose')

const connectDB = async () =>{
    const conn = await mongoose.connect(process.env.url);
    console.log(`DB connected ${conn.connection.host}`)
}
module.exports = connectDB;