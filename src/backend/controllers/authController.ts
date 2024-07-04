// src/controllers/authController.ts

import 'dotenv/config';
import { Request, Response } from 'express';
import { AuthService } from '../services/auth/AuthService';
import { AuthServiceFactory } from '../services/auth/AuthServiceFactory';

const authService: AuthService = AuthServiceFactory.createAuthService(
	process.env.AUTH_SERVICE || 'local',
);

export const login = async (req: Request, res: Response) => {
	const { username, password } = req.body;
	try {
		const token = await authService.login(username, password);
		res.send({ token });
	} catch (error) {
		res.status(401).send('Login failed');
	}
};
