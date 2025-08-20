// import express from "express"
// import { app_user } from "../generated/prisma"
// import { prismaAssignProgressFromBook, prismaGetAllProgress, prismaPatchProgress, prismaUserCreate, prismaUserFindMany } from "./neon"

// const router = express.Router()

// router.get("/checkhealth", async (req, res) => {
//     res.status(200).json({ message: "----- health good" })
// })
// // manage router로 애초에 폴더를 구분하면 더 깔끔할 것
// router.get("/manage", async (req, res) => {
//     const result = await prismaUserFindMany()
//     res.status(200).json(result)
// })

// router.post("/manage", async (req, res) => {
//     console.log("---- here")
//     const user = req.body as app_user
//     const result = await prismaUserCreate(user)
//     res.status(201).json(result)
// })

// router.post("/progress/student/:studentId", async (req, res) => {
//     const studentIdString = req.params.studentId
//     const studentId = Number(studentIdString)
//     if (!studentId) { throw new Error("ValidationError") }

//     const bookTitle = req.body
//     if (!bookTitle) { throw new Error("ValidationError") }

//     const result = await prismaAssignProgressFromBook(studentId, bookTitle)

//     res.status(201).json(result)
// })

// router.get("/progress/student/:studentId", async (req, res) => {
//     const studentIdString = req.params.studentId
//     const studentId = Number(studentIdString)
//     const result = await prismaGetAllProgress(studentId)

//     res.status(200).json(result)
// })

// router.patch("/progress", async (req, res) => {
//     console.log("----patching to here")
//     const { patchingPropertyName, editedDict } = req.body
//     const result = prismaPatchProgress(patchingPropertyName, editedDict)

//     res.status(200).json(result)
// })

// export default router