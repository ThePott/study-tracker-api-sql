import express from "express"
import { prismaAssignReviewCheckFromBook } from "../neon"

const reviewCheckRouter = express.Router()

reviewCheckRouter.get("/student/:studentId", async (req, res) => {
    try {
        const studentIdString = req.params.studentId
        const studentId = Number(studentIdString)
        res.status(200).json({ studentId })
    } catch (error) {}
})

reviewCheckRouter.post("/student/:studentId", async (req, res, next) => {
    try {
        const studentIdString = req.params.studentId
        const studentId = Number(studentIdString)

        const bookTitle = req.body
        if (!bookTitle) {
            throw new Error("ValidationError")
        }

        const result = await prismaAssignReviewCheckFromBook(studentId, bookTitle)
        res.status(201).json(result)
    } catch (error) {
        next(error)
    }
})

reviewCheckRouter.patch("/student/:studentId", async (req, res) => {
    try {
        const studentIdString = req.params.studentId
        const studentId = Number(studentIdString)
        res.status(200).json({ studentId })
    } catch (error) {}
})



export default reviewCheckRouter
