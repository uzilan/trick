import EpisodeModel from "./episodeModel";
import CharactersView from "../characters/charactersView";
import { Link } from "react-router-dom";

interface Props {
	episodeModel: EpisodeModel
}


export default function EpisodeView({ episodeModel }: Props) {
	function noNext() {
	}

	return (
		<div key={episodeModel.id}>
			<h1>{episodeModel.name}</h1>
			<table className="center">
				<tbody>
				<tr>
					<td className="right">episode:</td>
					<td className="left">{episodeModel.episode}</td>
				</tr>
				<tr>
					<td className="right">air date:</td>
					<td className="left">{episodeModel.air_date}</td>
				</tr>
				</tbody>
			</table>
			<p className="left">Characters:</p>
			<CharactersView characters={episodeModel.characters} next={noNext} showNext={false}/>
			<Link to="/portal">Back</Link>
		</div>
	)
}