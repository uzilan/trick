import { gql, useQuery } from "@apollo/client";
import { range } from "lodash";
import { useState } from "react";
import LocationModel from "../location/locationModel";
import LocationsView from "./locationsView";

const q = range(1, 8).map(x => `
       page${x}: locations(page: ${x}) {
            info{
                count, pages, next, prev
            }
            results {
                id, name, type, dimension, residents {
                    id, name, image
                }
            }
        }
`).join(",")


const locationsQuery = gql`query locations {${q}}`

export default function Locations() {

	const [locations, setLocations] = useState<LocationModel[]>([])

	const { loading, error, data } = useQuery(locationsQuery)

	if (loading) return <p>Loading locations...</p>;
	if (error) return <p>Error :(</p>;

	if (locations.length === 0) {
		let allResults = [
			...data.page1.results,
			...data.page2.results,
			...data.page3.results,
			...data.page4.results,
			...data.page5.results,
			...data.page6.results,
			...data.page7.results,
		];

		setLocations(allResults);
	}

	return (
		<LocationsView locations={locations}/>
	)
}