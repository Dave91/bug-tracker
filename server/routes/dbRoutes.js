import express from "express";
import { bugsAll, bugsAdd, bugsDel } from "../controller/dbController.js";
const router = express.Router();

router.get("/all", bugsAll);
router.post("/add", bugsAdd);
router.delete("/:id", bugsDel);

export default router;
