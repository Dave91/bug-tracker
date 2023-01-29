import express from "express";
import { bugsAll, bugsAdd, bugsDel } from "../controller/dbController.js";
const router = express.Router();

router.get("/view", bugsAll);
router.post("/view", bugsAdd);
router.delete("/:id", bugsDel);

export default router;
