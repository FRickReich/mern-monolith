import React from "react";
import IButton from "./IButton";
import "./Button.scss";

const Button = ({
	primary = false,
	size = "medium",
	label,
	...props
}: IButton) => {
	return (
		<div
			className={`Button ${primary ? "primary" : ""} ${size}`}
			{...props}
		>
			{label}
		</div>
	);
};

export default Button;
