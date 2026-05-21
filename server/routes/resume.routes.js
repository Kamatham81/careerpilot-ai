const express = require("express")

const router = express.Router()

router.post("/generate", (req, res) => {

    const {
        name,
        role,
        skills,
        experience,
        education,
        projects,
        certifications,
        achievements,
        linkedin,
        github
    } = req.body

    const resume = {

        headline: `${role} | AI Generated Resume`,

        summary:
            `Experienced ${role} skilled in ${skills}.`,

        skills: skills.split(","),

        experience,

        education,

        projects,

        certifications,

        achievements,

        linkedin,

        github,

        atsScore:
            Math.floor(Math.random() * 15) + 85
    }

    res.json(resume)
})

module.exports = router