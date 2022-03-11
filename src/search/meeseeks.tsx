import { Link, useLocation } from "react-router-dom";
import React from "react";
import "./meeseeks.css"

export default function Meeseeks() {
	const location = useLocation();

	if (location.pathname === "/" || location.pathname === "/search") {
		return (<span/>)
	}

	return (
		<div className="meeseeks-wrapper">
			<Link to="/search">
				<img src={require("../images/meeseeks.png")} alt="search" title="search"
				     className="meeseeks"/>
			</Link>
		</div>
	)
}