import Characters from "../characters/characters";
import Episodes from "../episodes/episodes";
import Locations from "../locations/locations";
import Collapsible from "react-collapsible";
import "./portal.css"

export default function Portal() {
	return (
		<div>
			<div className="collaps-wrapper">
				<Collapsible trigger="Characters" open={true}>
					<Characters/>
				</Collapsible>
			</div>
			<div className="collaps-wrapper">
				<Collapsible trigger="Episodes">
					<Episodes/>
				</Collapsible>
			</div>
			<div className="collaps-wrapper">
				<Collapsible trigger="Locations">
					<Locations/>
				</Collapsible>
			</div>
		</div>
	)
}