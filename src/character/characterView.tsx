import CharacterModel from "./characterModel";
import "./character.css"
import { Link } from "react-router-dom";
import EpisodesView from "../episodes/episodesView";

interface Props {
	characterModel: CharacterModel
}

export default function CharacterView({ characterModel }: Props) {

	return (
		<div>

			<div className="character-wrapper">
				<img src={characterModel.image} alt={characterModel.name}/>
				<div className="character-info">
					<table className="center">
						<tbody>
						<tr>
							<td colSpan={2}>
								<h1 className="center">{characterModel.name}</h1>
							</td>
						</tr>
						<tr>
							<td>status:</td>
							<td>{characterModel.status}</td>
						</tr>
						<tr>
							<td>species:</td>
							<td>{characterModel.species}</td>
						</tr>
						{characterModel.type ?
							<tr>
								<td>type:</td>
								<td>{characterModel.type}</td>
							</tr> :
							""
						}
						<tr>
							<td>gender:</td>
							<td>{characterModel.gender}</td>
						</tr>
						<tr>
							<td>origin:</td>
							<td>
								<Link to={`/location/${characterModel.origin.id}`}>
									{characterModel.origin.name}
								</Link>
							</td>
						</tr>
						<tr>
							<td>location:</td>
							<td>
								<Link to={`/location/${characterModel.location.id}`}>
									{characterModel.location.name}
								</Link>
							</td>
						</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div className="center padded">
				<EpisodesView episodes={characterModel.episode}/>
			</div>
		</div>
	)
}