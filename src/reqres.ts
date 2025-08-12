import { Request as Xrequest, Response as Xresponse } from "express"
import { app_user } from "../generated/prisma"
import { prismaUserCreate, prismaUserFindMany } from "./neon"

export const checkHealth = async (req: Xrequest, res: Xresponse) => {
    res.status(200).json({ message: "----- health good" })
}

export const getAllUsers = async (req: Xrequest, res: Xresponse) => {
    const result = await prismaUserFindMany()
    res.status(200).json(result)
}

export const addUser = async (req: Xrequest, res: Xresponse) => {
    console.log("---- here")
    const user = req.body as app_user
    const result = await prismaUserCreate(user)
    res.status(201).json(result)
}