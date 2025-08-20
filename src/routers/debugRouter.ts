import express from "express"

const debugRouter = express.Router()

debugRouter.get("/", async (req, res) => {
    res.status(200).send("---- Welcome!")
})

debugRouter.get("/checkhealth", async (req, res) => {
    res.status(200).json({ message: "----- health good" })
})

export default debugRouter