import express from "express"

const reviewCheckRouter = express.Router()

reviewCheckRouter.post("/student/:studentId", async (req, res) => {
    try {
        const studentIdString = req.params.studentId
        const studentId = Number(studentIdString)
        res.status(201).json({studentId})
    } catch (error) {

    }
})

export default reviewCheckRouter