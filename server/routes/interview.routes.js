const express = require("express")
const router = express.Router()

router.post("/question", (req, res) => {

    const { role } = req.body

    const questions = [
        `Tell me about your experience in ${role}`,
        `What are challenges in ${role}?`,
        `Explain a project you built in ${role}`
    ]

    const randomQuestion = questions[Math.floor(Math.random() * questions.length)]

    res.json({
        question: randomQuestion,
        difficulty: "medium"
    })
})

module.exports = router