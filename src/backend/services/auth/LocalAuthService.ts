// src/services/auth/LocalAuthService.ts
import { AuthService } from "./AuthService";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Dummy-Datenbank
const users = [
	{
		username: "testuser",
		password: bcrypt.hashSync("1234", 10), // Passwort gehasht speichern
	},
];

const SECRET_KEY = "your_jwt_secret_key";

export class LocalAuthService implements AuthService {
	async login(username: string, password: string): Promise<string> {
		const user = users.find((user) => user.username === username);
		if (!user || !bcrypt.compareSync(password, user.password)) {
			throw new Error("Invalid credentials");
		}

		const token = jwt.sign({ username: user.username }, SECRET_KEY, {
			expiresIn: "1h",
		});
		return token;
	}

	async verifyToken(token: string): Promise<boolean> {
		try {
			jwt.verify(token, SECRET_KEY);
			return true;
		} catch (error) {
			return false;
		}
	}
}
