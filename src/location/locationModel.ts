import CharacterModel from "../character/characterModel";

export default interface LocationModel {
	id: string
	name: string
	type: string
	dimension: string
	residents: CharacterModel[]
}