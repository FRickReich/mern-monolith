// src/services/AuthService.ts
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

interface AuthResponse {
	token: string;
}

export class AuthService {
	async login(username: string, password: string): Promise<string> {
		try {
			const response = await axios.post<AuthResponse>('/auth/login', {
				username,
				password,
			});
			return response.data.token;
		} catch (error) {
			throw new Error('Login failed');
		}
	}

	async verifyToken(token: string): Promise<boolean> {
		try {
			const decodedToken = jwtDecode<{ exp: number }>(token);
			const currentTime = Date.now() / 1000;
			return decodedToken.exp > currentTime;
		} catch (error) {
			return false;
		}
	}
}
