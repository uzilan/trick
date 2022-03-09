import LocationModel from "../location/locationModel";

export default class TypeAndLocation {
	type!: string;
	locations!: LocationModel[];

	constructor(type: string, locations: LocationModel[]) {
		this.type = type
		this.locations = locations
	}
}