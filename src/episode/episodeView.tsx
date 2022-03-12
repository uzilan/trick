import EpisodeModel from "./episodeModel";
import CharactersView from "../characters/charactersView";

interface Props {
	episodeModel: EpisodeModel
}


export default function EpisodeView({ episodeModel }: Props) {

	return (
		<div key={episodeModel.id}>
			<h1>{episodeModel.name}</h1>
			<div className="center">
				<table className="center">
					<tbody>
					<tr>
						<td>episode:</td>
						<td>{episodeModel.episode}</td>
					</tr>
					<tr>
						<td>air date:</td>
						<td>{episodeModel.air_date}</td>
					</tr>
					</tbody>
				</table>
			</div>
			<CharactersView characters={episodeModel.characters}/>
		</div>
	)
}