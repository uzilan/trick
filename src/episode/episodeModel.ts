import CharacterModel from "../character/characterModel";

export default interface EpisodeModel {
	id: string
	name: string
	air_date: string
	episode: string
	characters: CharacterModel[]
	created: String
}