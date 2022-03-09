import { Link, useLocation } from "react-router-dom";
import React from "react";

export default function Back() {
	const location = useLocation();

	if (location.pathname === "/" || location.pathname === "/portal") {
		return (<span/>)
	}

	return (
		<div className="back">
			<Link to="/portal">
				<img src={require("../images/portal.png")} alt="back through the portal"
				     className="portal"/>
			</Link>
		</div>
	)
}