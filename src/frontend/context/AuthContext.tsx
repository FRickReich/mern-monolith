// src/context/AuthContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../services/AuthService';

interface AuthContextType {
	token: string | null;
	login: (username: string, password: string) => Promise<void>;
	logout: () => void;
	isAuthenticated: boolean;
}

const initialAuthContext: AuthContextType = {
	token: null,
	login: () => Promise.resolve(),
	logout: () => {},
	isAuthenticated: false,
};

const AuthContext = createContext<AuthContextType>(initialAuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [token, setToken] = useState<string | null>(
		localStorage.getItem('token'),
	);
	const navigate = useNavigate();
	const authService = new AuthService();

	const login = async (username: string, password: string) => {
		try {
			const token = await authService.login(username, password);
			localStorage.setItem('token', token);
			setToken(token);
		} catch (error) {
			console.error('Login failed', error);
			throw error;
		}
	};

	const logout = () => {
		localStorage.removeItem('token');
		setToken(null);
		navigate('/login');
	};

	const isAuthenticated = token !== null;

	return (
		<AuthContext.Provider value={{ token, login, logout, isAuthenticated }}>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
