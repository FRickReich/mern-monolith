export interface AuthService {
	login(username: string, password: string): Promise<string>;
	verifyToken(token: string): Promise<boolean>;
	// Weitere gemeinsame Methoden, falls erforderlich
}
