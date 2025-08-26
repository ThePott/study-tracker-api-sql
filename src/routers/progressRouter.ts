import express from "express"
import {
    prismaAssignProgressFromBook,
    prismaGetAllProgress,
    prismaPatchProgress,
} from "../neon"

const progressRouter = express.Router()

progressRouter.post("/student/:studentId", async (req, res) => {
    const studentIdString = req.params.studentId
    const studentId = Number(studentIdString)
    if (!studentId) {
        throw new Error("ValidationError")
    }

    const bookTitle = req.body
    if (!bookTitle) {
        throw new Error("ValidationError")
    }

    const result = await prismaAssignProgressFromBook(studentId, bookTitle)

    res.status(201).json(result)
})

progressRouter.get("/student/:studentId", async (req, res) => {
    const studentIdString = req.params.studentId
    const studentId = Number(studentIdString)
    const result = await prismaGetAllProgress(studentId)
    console.log("this")
    res.status(200).json(result)
})

progressRouter.patch("/", async (req, res) => {
    const { patchingPropertyName, editedDict } = req.body
    const result = prismaPatchProgress(patchingPropertyName, editedDict)

    res.status(200).json(result)
})

export default progressRouter
