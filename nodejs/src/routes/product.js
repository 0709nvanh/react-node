import express from 'express'
import { create, list, read, remove, update } from '../controllers/product'

const router = express.Router()

router.post("/product", create)
router.get("/products", list)
router.get("/product/:slug" ,read)
router.delete("/product/:slug", remove)
router.put("/product/:slug", update)

export default router