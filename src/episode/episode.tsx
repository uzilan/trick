import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import React from "react";
import EpisodeView from "./episodeView";

const episodeQuery = gql`
    query Episode($id: ID!) {
        episode(id: $id) {
            id, name, air_date, episode, characters {
		        id, name, image
	        }
        }
    }
`
export default function Episode() {
	let { episodeId } = useParams()
	const { loading, error, data } = useQuery(episodeQuery, {
		variables: {
			id: episodeId,
		},
	})

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return (
		<EpisodeView episodeModel={data.episode}/>
	)
}