import CharacterPreview from "./characterPreview";
import './characters.css'
import CharacterModel from "../character/characterModel";

interface Props {
	characters: any
	next: () => void
	showNext: boolean
}

export default function CharactersView({ characters, next, showNext }: Props) {
	const chars = characters.map((character: CharacterModel) => (
		<CharacterPreview character={character}/>
	));

	const maybeNext = showNext ?
		(<p>
			<button onClick={next}><h1>See more characters</h1></button>
		</p>) : ("")

	return (
		<div className="characters-list">{chars}
			{maybeNext}
		</div>
	)
}