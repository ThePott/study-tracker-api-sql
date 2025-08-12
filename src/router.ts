import express from "express"
import { addUser, checkHealth, getAllUsers } from "./reqres"

const router = express.Router()

router.get("/checkhealth", checkHealth)
router.get("/manage", getAllUsers)
router.post("/manage", addUser)

export default router