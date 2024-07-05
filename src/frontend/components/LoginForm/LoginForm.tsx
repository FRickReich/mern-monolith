// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AuthService } from '../../services/AuthService';

// const authService = new AuthService();

// const LoginForm: React.FC = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState<string | null>(null);
//   const navigate = useNavigate();

//   const handleLogin = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       const token = await authService.login(username, password);
//       localStorage.setItem('token', token);
//       setError(null);
//       navigate('/protected'); // Navigiere zur geschützten Seite nach dem Login
//     } catch (error) {
//       setError('Login failed. Please check your credentials.');
//       console.error('Login error:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleLogin}>
//       <div>
//         <label htmlFor="username">Username:</label>
//         <input
//           type="text"
//           id="username"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//         />
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input
//           type="password"
//           id="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       {error && <div>{error}</div>}
//       <button type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginForm;

// src/components/LoginForm/LoginForm.tsx
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const LoginForm: React.FC = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState<string | null>(null);
	const navigate = useNavigate();
	const location = useLocation();
	const { login } = useAuth();

	const from = (location.state as { from?: Location })?.from?.pathname || "/";

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await login(username, password);
			setError(null);
			navigate(from, { replace: true });
		} catch (error) {
			setError("Login failed. Please check your credentials.");
			console.error("Login failed", error);
		}
	};

	return (
		<div>
			<h2>Login</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label>
						Username:
						<input
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</label>
				</div>
				<div>
					<label>
						Password:
						<input
							type="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</label>
				</div>
				{error && <div>{error}</div>}
				<button type="submit">Log in</button>
			</form>
		</div>
	);
};

export default LoginForm;
