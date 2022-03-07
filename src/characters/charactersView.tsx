import CharacterView from "./characterView";
import './characters.css'
import Navigation from "../Navigation";
import CharacterModel from "../character/characterModel";

interface Props {
	characters: any
	next: () => void
	setNavigation: (navigation: Navigation) => void
}

export default function CharactersView({ characters, next, setNavigation }: Props) {
	const chars = characters.map((character: CharacterModel) => (
		<CharacterView character={character} setNavigation={setNavigation}/>
	));

	return (
		<div className="characters-list">{chars}
			<p>
				<button onClick={next}><h1>See more characters</h1></button>
			</p>
		</div>
	)
}