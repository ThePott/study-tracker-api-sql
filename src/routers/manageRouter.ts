import express from "express"
import { app_user } from "../../generated/prisma"
import { prismaUserFindMany, prismaUserCreate } from "../neon"

const manageRouter = express.Router()

manageRouter.get("/", async (req, res) => {
    const result = await prismaUserFindMany()
    res.status(200).json(result)
})

manageRouter.post("/", async (req, res) => {
    const user = req.body as app_user
    const result = await prismaUserCreate(user)
    res.status(201).json(result)
})


export default manageRouter