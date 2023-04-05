import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/sinlge">
				<span className="navbar-brand mb-0 h1">Click me</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<button className="btn btn-primary">Action Button</button>
				</Link>
			</div>
		</nav>
	);
};