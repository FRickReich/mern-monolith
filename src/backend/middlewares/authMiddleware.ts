import { Request, Response, NextFunction } from "express";
import { AuthService } from "../services/auth/AuthService";
import { AuthServiceFactory } from "../services/auth/AuthServiceFactory";

const authService: AuthService = AuthServiceFactory.createAuthService(
	process.env.AUTH_SERVICE || "local",
);

export const authMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction,
) => {
	const authHeader = req.headers["authorization"];
	if (!authHeader) {
		return res.status(401).send("Unauthorized");
	}

	const token = authHeader.split(" ")[1];

	try {
		const isValid = await authService.verifyToken(token);
		if (isValid) {
			next();
		} else {
			res.status(401).send("Unauthorized");
		}
	} catch (error) {
		res.status(500).send("Internal Server Error");
	}
};
