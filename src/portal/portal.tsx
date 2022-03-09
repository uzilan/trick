import Characters from "../characters/characters";
import Episodes from "../episodes/episodes";
import Locations from "../locations/locations";
import Collapsible from "react-collapsible";
import "./portal.css"

export default function Portal() {
	return (
		<div>
			<Collapsible trigger="Characters" open={true}>
				<Characters/>
			</Collapsible>
			<Collapsible trigger="Episodes">
				<Episodes/>
			</Collapsible>
			<Collapsible trigger="Locations">
				<Locations/>
			</Collapsible>
		</div>
	)
}