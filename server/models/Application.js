const mongoose = require("mongoose")

const applicationSchema = new mongoose.Schema({

    userId: String,

    jobId: String,

    name: String,

    email: String,

    resume: String

})

module.exports = mongoose.model(
    "Application",
    applicationSchema
)