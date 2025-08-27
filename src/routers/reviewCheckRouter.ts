import express from "express"

const reviewCheckRouter = express.Router()

reviewCheckRouter.get("/student/:studentId", async (req, res) => {
    try {
        const studentIdString = req.params.studentId
        const studentId = Number(studentIdString)
        res.status(200).json({studentId})
    } catch (error) {

    }
})

reviewCheckRouter.post("/student/:studentId", async (req, res) => {
    try {
        const studentIdString = req.params.studentId
        const studentId = Number(studentIdString)
        res.status(201).json({studentId})

        const result = await prismaAssignReviewCheckFromBook(studentId, bookTitle)
    } catch (error) {

    }
})

reviewCheckRouter.patch("/student/:studentId", async (req, res) => {
    try {
        const studentIdString = req.params.studentId
        const studentId = Number(studentIdString)
        res.status(200).json({studentId})
    } catch (error) {

    }
})

export default reviewCheckRouter