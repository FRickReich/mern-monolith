import { Router } from "express";
import { login } from "../controllers/authController";
import { authMiddleware } from "../middlewares/authMiddleware";

const router = Router();

router.post("/login", login);
router.get("/protected", authMiddleware, (req, res) => {
	res.send("This is a protected route");
});

export default router;
