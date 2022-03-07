import CharacterModel from "./characterModel";
import "./character.css"
import Navigation from "../Navigation";

interface Props {
	characterModel: CharacterModel
	setNavigation: (navigation: Navigation) => void
}

export default function CharacterView({ characterModel, setNavigation }: Props) {
	function nav() {
		setNavigation({ page: "characters", args: {} })
	}
// debugger
	const episodes = characterModel.episode.map(ep=> ep.name).join(", ");

	return (
		<div>
			<p>
				<img src={characterModel.image} alt={characterModel.name}/>
			</p>
			<h1>{characterModel.name}</h1>
			<table className="center">
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
				<tr>
					<td className="right">episodes:</td>
					<td className="left">{episodes}</td>
				</tr>
			</table>
			<a onClick={nav} href="javascript:void(0)">Back to all characters</a>
		</div>
	)
}