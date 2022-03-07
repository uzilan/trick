import { gql, useQuery } from "@apollo/client";
import CharactersView from "./charactersView";
import { useState } from "react";
import { ApolloQueryResult } from "@apollo/client/core";
import CharacterModel from "../character/characterModel";

const charactersQuery = gql`
    query Characters($page: Int) {
        characters(page: $page) {
            info {
                count, pages, next, prev
            }
            results {
                id, name, image
            }
        }
    }
`

export default function Characters() {

	const [chars, setChars] = useState<CharacterModel[]>([])

	const { loading, error, data, fetchMore } = useQuery(charactersQuery, {
		variables: {
			page: 1,
		},
	})

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	if (chars.length === 0) {
		setChars(data.characters.results)
	}

	return (
		<CharactersView characters={chars} next={() => {
			fetchMore({
					variables: {
						page: data.characters.info.next,
					},
				},
			).then(newData => {
				const results = newData as ApolloQueryResult<any>
				setChars([...chars, ...results.data.characters.results])
			})
		}}
		/>
	)
}