import './characters.css'
import CharacterModel from "../character/characterModel";
import { Link } from "react-router-dom";

interface Props {
	character: CharacterModel
}

export default function CharacterView({ character }: Props) {

	return (

		<div key={character.id} className="character">
			<Link to={{ pathname: "/character/" + character.id }}>
				<p>
					<img src={character.image} alt={character.name}/>
				</p>
				<p>
					{character.name}
				</p>
			</Link>
		</div>
	);
}