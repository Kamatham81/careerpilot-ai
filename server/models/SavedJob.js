const mongoose = require("mongoose")

const savedJobSchema = new mongoose.Schema({

    userId: String,

    jobId: String,

    title: String,

    company: String,

    location: String,

    salary: String

})

module.exports = mongoose.model(
    "SavedJob",
    savedJobSchema
)