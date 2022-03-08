import Episode from "../episode/episodeModel";
import EpisodeModel from "../episode/episodeModel";

export default interface CharacterModel {
	id: number
	name: string
	status: string
	species: string
	type: string
	gender: string
	// origin: Location
	// location: Location
	image: string
	episode: EpisodeModel[]
}
