import EpisodeModel from "../episode/episodeModel";
import LocationModel from "../location/locationModel";

export default interface CharacterModel {
	id: number
	name: string
	status: string
	species: string
	type: string
	gender: string
	origin: LocationModel
	location: LocationModel
	image: string
	episode: EpisodeModel[]
}
