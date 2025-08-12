import { Request, Response } from "express"

export const checkHealth = async (req: Request, res: Response) => {
    console.log("----here")
    res.json({ message: "----- so far so good" })
}