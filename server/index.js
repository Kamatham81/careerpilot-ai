const express = require("express")

const cors = require("cors")

const bcrypt = require("bcryptjs")

const jwt = require("jsonwebtoken")

const multer = require("multer")

const connectDB = require("./config/db")

const authMiddleware = require("./middleware/authMiddleware")

const User = require("./models/User")

const Job = require("./models/Job")

const Application = require("./models/Application")

const SavedJob = require("./models/SavedJob")

const app = express()
const resumeRouter = require("./routes/resume.routes")
const interviewRouter= require("./routes/interview.routes")


app.use(cors())

app.use(express.json())

app.use("/uploads", express.static("uploads"))
app.use("/api/resume", resumeRouter)
app.use("/api/interview", interviewRouter)


connectDB()


// MULTER CONFIG

const storage = multer.diskStorage({

    destination: function(req, file, cb) {

        cb(null, "uploads")

    },

    filename: function(req, file, cb) {

        cb(

            null,

            Date.now() + "-" + file.originalname

        )

    }

})

const upload = multer({

    storage: storage

})


// REGISTER

app.post("/register", async (request, response) => {

    try {

        const { name, email, password } = request.body

        const existingUser = await User.findOne({
            email: email
        })

        if (existingUser) {

            return response.status(400).send(
                "User Already Exists"
            )

        }

        const hashedPassword = await bcrypt.hash(
            password,
            10
        )

        const newUser = new User({

            name,

            email,

            password: hashedPassword

        })

        await newUser.save()

        response.send("User Registered Successfully")

    }

    catch (error) {

        console.log(error)

        response.status(500).send("Server Error")

    }

})


// LOGIN

app.post("/login", async (request, response) => {

    try {

        const { email, password } = request.body

        const existingUser = await User.findOne({
            email: email
        })

        if (!existingUser) {

            return response.status(404).send(
                "User Not Found"
            )

        }

        const isPasswordCorrect = await bcrypt.compare(

            password,

            existingUser.password

        )

        if (!isPasswordCorrect) {

            return response.status(400).send(
                "Invalid Password"
            )

        }

        const token = jwt.sign(

            {
                userId: existingUser._id
            },

            "mySecretKey",

            {
                expiresIn: "1d"
            }

        )

        response.json({

            message: "Login Successful",

            token: token

        })

    }

    catch (error) {

        console.log(error)

        response.status(500).send("Server Error")

    }

})


// PROTECTED DASHBOARD

app.get(

    "/dashboard",

    authMiddleware,

    async (request, response) => {

        try {

            const user = await User.findById(
                request.userId
            )

            response.json({

                message: "Protected Dashboard Data",

                user: user

            })

        }

        catch (error) {

            console.log(error)

            response.status(500).send("Server Error")

        }

    }

)


// ADD JOB

app.post("/add-job", async (request, response) => {

    try {

        const newJob = new Job({

            title: request.body.title,

            company: request.body.company,

            location: request.body.location,

            salary: request.body.salary,

            description: request.body.description

        })

        await newJob.save()

        response.json({

            message: "Job Added Successfully"

        })

    }

    catch (error) {

        console.log(error)

        response.status(500).send("Server Error")

    }

})


// GET JOBS

app.get("/jobs", async (request, response) => {

    try {

        const jobs = await Job.find()

        response.json(jobs)

    }

    catch (error) {

        console.log(error)

        response.status(500).send("Server Error")

    }

})


// APPLY JOB WITH RESUME UPLOAD

app.post(

    "/apply",

    upload.single("resume"),

    async (request, response) => {

        try {

            const newApplication = new Application({

                userId: request.body.userId,

                jobId: request.body.jobId,

                name: request.body.name,

                email: request.body.email,

                resume: request.file.path

            })

            await newApplication.save()

            response.json({

                message: "Application Submitted Successfully"

            })

        }

        catch (error) {

            console.log(error)

            response.status(500).send("Server Error")

        }

    }

)


// GET APPLICATIONS

app.get("/applications", async (request, response) => {

    try {

        const applications = await Application.find()

        response.json(applications)

    }

    catch (error) {

        console.log(error)

        response.status(500).send("Server Error")

    }

})


// SAVE JOB

app.post("/save-job", async (request, response) => {

    try {

        const newSavedJob = new SavedJob({

            userId: request.body.userId,

            jobId: request.body.jobId,

            title: request.body.title,

            company: request.body.company,

            location: request.body.location,

            salary: request.body.salary

        })

        await newSavedJob.save()

        response.json({

            message: "Job Saved Successfully"

        })

    }

    catch(error) {

        console.log(error)

        response.status(500).send("Server Error")

    }

})


// GET SAVED JOBS

app.get("/saved-jobs", async (request, response) => {

    try {

        const savedJobs = await SavedJob.find()

        response.json(savedJobs)

    }

    catch(error) {

        console.log(error)

        response.status(500).send("Server Error")

    }

})


// DELETE SAVED JOB

app.delete(

    "/delete-saved-job/:id",

    async(request, response) => {

        try {

            await SavedJob.findByIdAndDelete(
                request.params.id
            )

            response.json({

                message: " Job Deleted"

            })

        }

        catch(error) {

            console.log(error)

            response.status(500).send("Server Error")

        }

    }

)


// SERVER

app.listen(5000, () => {

    console.log("Server Running On Port 5000")

})