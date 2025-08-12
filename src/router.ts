import express from "express"
import { checkHealth } from "./reqres"

const router = express.Router()

router.get("/checkhealth", checkHealth)

export default router