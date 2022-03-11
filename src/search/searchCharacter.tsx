import { gql, useQuery } from "@apollo/client";
import CharactersView from "../characters/charactersView";
import React from "react";

const characterQuery = gql`
    query Characters($filter: FilterCharacter) {
        characters(filter: $filter) {
            info {
                count, pages, next, prev
            }
            results {
                id, name, image
            }
        }
    }`

function noNext() {
}

interface Props {
	name: string
	status: string
	species: string
	type: string
	gender: string
}

export default function SearchCharacter({ name, status, species, type, gender }: Props) {
	const { loading, error, data } = useQuery(characterQuery, {
		variables: {
			filter: {
				name: name,
				status: status,
				species: species,
				type: type,
				gender: gender,
			},
		},
	})

	if (loading) return <p>Loading characters...</p>;
	if (error) return <p>Not found</p>;

	return (
		<CharactersView characters={data.characters.results} showNext={false} next={noNext}/>
	)
}