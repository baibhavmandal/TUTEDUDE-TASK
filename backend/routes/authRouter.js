import express from "express";

import { createUser, loginUser } from "../controllers/authController.js";
import { validateUser } from "../validators/validator.js";

const router = express.Router();

router.post("/signup", validateUser, createUser); // create a new user account
router.post("/login", validateUser, loginUser); // authenticate user and issue a jwt

export default router;
