const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const conn = await mongoose.connect("mongodb+srv://mishikaj162001:t0oyDqFFYv4TfiNh@cluster0.2drakx8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });  

        console.log(`MongoDB connected: ${conn.connection.host}`.cyan.bold)
    } catch (error) {
        console.log(error) 
    }
}

module.exports = {connectDB};