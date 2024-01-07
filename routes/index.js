import express  from "express";
import createUser from "../controllers/user.controller.js";

const router = express.Router();

// Routes
router.post("/users", createUser);

export default router;