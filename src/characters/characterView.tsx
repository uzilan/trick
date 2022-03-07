import './characters.css'
import Navigation from "../Navigation";
import CharacterModel from "../character/characterModel";

interface Props {
	character: CharacterModel
	setNavigation: (navigation: Navigation) => void
}

export default function CharacterView({ character, setNavigation }: Props) {

	function nav() {
		setNavigation({ page: "character", args: { characterId: character.id } })
	}

	return (
		<div key={character.id} className="character">
			<a onClick={nav} href="javascript:void(0)">
				<p>
					<img src={character.image} alt={character.name}/>
				</p>
				<p>
					{character.name}
				</p>
			</a>
		</div>
	);
}