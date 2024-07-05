import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

const Header: React.FC = () => {
	const { isAuthenticated, logout } = useAuth();

	return (
		<div>
			<h1>Authentication Example</h1>
			<Link to="/dashboard">Dashboard</Link>
			<Link to="/protected">Protected</Link>
			{isAuthenticated && <Button label="Logout" onClick={logout} />}
		</div>
	);
};

export default Header;
