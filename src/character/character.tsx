import CharacterView from "./characterView";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import React from "react";

const characterQuery = gql`
    query Character($id: ID!) {
        character(id: $id) {
            id, name, status, species, type, gender, image,
            episode {
                name
            }
        }
    }
`

function Character() {
	let { characterId } = useParams();
	const { loading, error, data } = useQuery(characterQuery, {
		variables: {
			id: characterId,
		},
	})

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return (
		<CharacterView characterModel={data.character}/>
	)
}

export default Character;