import express from "express"
import { prismaAssignReviewCheckFromBook, prismaGetAllReviewCheck, prismaPatchReviewCheck } from "../neon"

const reviewCheckRouter = express.Router()

reviewCheckRouter.get("/student/:studentId", async (req, res) => {
    try {
        const studentIdString = req.params.studentId
        const studentId = Number(studentIdString)

        const result = await prismaGetAllReviewCheck(studentId)
        res.status(200).json(result)
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

reviewCheckRouter.patch("/", async (req, res, next) => {
    try {
        const { patchingPropertyName, editedDict } = req.body
        const result = await prismaPatchReviewCheck(patchingPropertyName, editedDict)
        res.status(200).json(result)
    } catch (error) {
        next(error)
    }
})

export default reviewCheckRouter
