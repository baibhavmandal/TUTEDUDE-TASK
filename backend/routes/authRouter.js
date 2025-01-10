import express from "express";

import { createUser, loginUser } from "../controllers/authController.js";

const router = express.Router();

router.post("/signup", createUser); // create a new user account
router.post("/login", loginUser); // authenticate user and issue a jwt

export default router;
