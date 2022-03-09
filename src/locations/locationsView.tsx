import LocationModel from "../location/locationModel";
import _ from "lodash";
import TypeAndLocation from "./typeAndLocation";
import { Link } from "react-router-dom";
import "./locations.css"

interface Props {
	locations: LocationModel[]
}

export default function LocationsView({ locations }: Props) {
	const locs = _.chain(locations)
	.groupBy(loc => loc.type)
	.map((lo, ty) => new TypeAndLocation(ty as string, lo as LocationModel[]))
	.value()

	const types = locs.map(pair => {
		const eps = pair.locations.map(lo =>
			<li>
				<Link to={`/location/${lo.id}`}>
					{lo.name}
				</Link>
			</li>)
		return (
			<div className="location-type">
				{pair.type}
				<ul className="type">
					{eps}
				</ul>
			</div>)
	})

	return (
		<div className="locations-list">{types}</div>
	)
}