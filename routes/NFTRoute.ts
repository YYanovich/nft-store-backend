import { Router } from "express";
import { getAllNFT, createNFT } from "../controllers/NFTController";
import upload from "../middleware/upload"

const router = Router();

router.get("/", getAllNFT);
router.post("/", upload.single("image"), createNFT);

export default router;
