import { Link, useLocation } from "react-router-dom";
import React from "react";
import "./device.css";

let savedLocation = "";

export default function Device() {
	const location = useLocation();

	if (location.pathname === "/") {
		return (<span/>)
	}


	function saveLocation() {
		savedLocation = location.pathname;
	}

	function resetLocation() {
		savedLocation = ""
	}

	if (savedLocation !== "") return (
		<div className="device-wrapper">
			<Link to={savedLocation} onClick={resetLocation}>
				<img src={require("../images/device.png")} alt="save device"
				     title="back to saved point in time/space" className="device"/>
			</Link>
		</div>)
	else return (
		<div className="device-wrapper" onClick={saveLocation}>
			<img src={require("../images/device.png")} alt="save device"
			     title="save this point in time/space" className="device"/>
		</div>)
}