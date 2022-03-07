import CharacterView from "./characterView";
import './characters.css'
import CharacterModel from "../character/characterModel";
import { Link } from "react-router-dom";

interface Props {
	characters: any
	next: () => void
}

export default function CharactersView({ characters, next }: Props) {
	const chars = characters.map((character: CharacterModel) => (
		<CharacterView character={character}/>
	));

	return (
		<div className="characters-list">{chars}
			<p>
				<button onClick={next}><h1>See more characters</h1></button>
			</p>
		</div>
	)
}