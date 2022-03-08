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
			<p>
				<img src={characterModel.image} alt={characterModel.name}/>
			</p>
			<h1>{characterModel.name}</h1>
			<table className="center">
				<tbody>
				<tr>
					<td className="right">status:</td>
					<td className="left">{characterModel.status}</td>
				</tr>
				<tr>
					<td className="right">species:</td>
					<td className="left">{characterModel.species}</td>
				</tr>
				<tr>
					<td className="right">type:</td>
					<td className="left">{characterModel.type}</td>
				</tr>
				<tr>
					<td className="right">gender:</td>
					<td className="left">{characterModel.gender}</td>
				</tr>
				</tbody>
			</table>
			<div className="center padded">
				<EpisodesView episodes={characterModel.episode}/>
			</div>

			<Link to="/portal">Back</Link>
		</div>
	)
}