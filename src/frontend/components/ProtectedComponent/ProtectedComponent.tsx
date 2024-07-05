import React from "react";
import { useAuth } from "../../context/AuthContext";

const ProtectedComponent: React.FC = () => {
	const { isAuthenticated } = useAuth();

	if (!isAuthenticated) {
		return <div>Unauthorized! Please log in.</div>;
	}

	return <div>This is a protected component.</div>;
};

export default ProtectedComponent;
