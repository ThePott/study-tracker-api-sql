import express from "express"
import { app_user } from "../generated/prisma"
import { prismaAssignProgressFromBook, prismaUserCreate, prismaUserFindMany } from "./neon"

const router = express.Router()

router.get("/checkhealth", async (req, res) => {
    res.status(200).json({ message: "----- health good" })
})

router.get("/manage", async (req, res) => {
    const result = await prismaUserFindMany()
    res.status(200).json(result)
})

router.post("/manage", async (req, res) => {
    console.log("---- here")
    const user = req.body as app_user
    const result = await prismaUserCreate(user)
    res.status(201).json(result)
})

router.post("/progress/student/:studentId", async (req, res) => {
    const studentIdString = req.params.studentId
    const studentId = Number(studentIdString)
    if (!studentId) { throw new Error("ValidationError") }

    const bookTitle = req.body
    if (!bookTitle) { throw new Error("ValidationError") }

    const result = await prismaAssignProgressFromBook(studentId, bookTitle)

    res.status(201).json(result)
})

export default router