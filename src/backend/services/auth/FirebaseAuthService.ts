// src/services/auth/FirebaseAuthService.ts
import { AuthService } from "./AuthService";

export class FirebaseAuthService implements AuthService {
	async login(username: string, password: string): Promise<string> {
		console.log(username, password);
		// Firebase spezifische Implementierung
		return "firebase-token";
	}

	async verifyToken(token: string): Promise<boolean> {
		console.log(token);
		// Firebase spezifische Implementierung
		return true;
	}
}
