import CharacterPreview from "./characterPreview";
import './characters.css'
import CharacterModel from "../character/characterModel";

interface Props {
	characters: any
}

export default function CharactersView({ characters }: Props) {
	const chars = characters.map((character: CharacterModel) => (
		<CharacterPreview character={character}/>
	));

	return (
		<div className="characters-list">{chars}</div>
	)
}