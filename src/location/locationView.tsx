import LocationModel from "./locationModel";
import CharactersView from "../characters/charactersView";

interface Props {
	locationModel: LocationModel
}

export default function LocationView({ locationModel }: Props) {

	return (
		<div key={locationModel.id} className="center">
			<h1 className="center">{locationModel.name}</h1>
			<div className="center">
				<table className="center">
					<tbody>
					<tr>
						<td>type:</td>
						<td>{locationModel.type}</td>
					</tr>
					<tr>
						<td>dimension:</td>
						<td>{locationModel.dimension}</td>
					</tr>
					</tbody>
				</table>
			</div>
			<CharactersView characters={locationModel.residents} />
		</div>
	)
}