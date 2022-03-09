import { Link } from "react-router-dom";
import "./box.css"

export default function Box() {
	return (
		<Link to="/portal">
			<img src={require("../images/box.png")} alt="Meeseeks box" className="box"/>
		</Link>
	)
}