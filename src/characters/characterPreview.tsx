import './characters.css'
import CharacterModel from "../character/characterModel";
import { Link } from "react-router-dom";

interface Props {
	character: CharacterModel
}

export default function CharacterPreview({ character }: Props) {

	return (

		<div key={character.id} className="character">
			<Link to={`/character/${character.id}`}>
				<div className="character-preview-wrapper">
					<img src={character.image} alt={character.name} className="character-preview"/>
				</div>
				<p>
					{character.name}
				</p>
			</Link>
		</div>
	);
}