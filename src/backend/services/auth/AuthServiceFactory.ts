// src/services/auth/AuthServiceFactory.ts
import { AuthService } from "./AuthService";
import { FirebaseAuthService } from "./FirebaseAuthService";
import { LocalAuthService } from "./LocalAuthService";
// import { OAuthService } from './OAuthService';
// import { CitadelAuthService } from './CitadelAuthService';
// import { KeycloakAuthService } from './KeycloakAuthService';

export class AuthServiceFactory {
	static createAuthService(type: string): AuthService {
		switch (type) {
			case "firebase":
				return new FirebaseAuthService();
			case "local":
				return new LocalAuthService();
			//   case 'oauth':
			// return new OAuthService();
			//   case 'citadel':
			// return new CitadelAuthService();
			//   case 'keycloak':
			// return new KeycloakAuthService();
			default:
				throw new Error("Unknown auth service type");
		}
	}
}
