import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import React from "react";
import LocationView from "./locationView";

const episodeQuery = gql`
    query Location($id: ID!) {
        location(id: $id) {
            id, name, type, dimension, residents {
                id, name, image
            }
        }
    }
`

export default function Location() {
	let { locationId } = useParams()
	const { loading, error, data } = useQuery(episodeQuery, {
		variables: {
			id: locationId,
		},
	})

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return (
		<LocationView locationModel={data.location}/>
	)
}