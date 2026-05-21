const mongoose = require("mongoose")

function connectDB() {

    mongoose.connect(
        "mongodb+srv://Pujitha:pujitha123@cluster0.49gwzrz.mongodb.net/careerai?retryWrites=true&w=majority"
    )

    .then(() => {
        console.log("MongoDB Connected")
    })

    .catch((error) => {
        console.log(error)
    })

}

module.exports = connectDB