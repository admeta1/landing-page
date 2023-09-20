import express from "express";


import {  register, getCsv} from "../controller/user.js";

const router = express.Router();

router.post("/register",  register);
router.get("/getCsv",  getCsv);





export default router;
