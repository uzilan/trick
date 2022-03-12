import { gql, useQuery } from "@apollo/client";
import CharactersView from "./charactersView";
import { useState } from "react";
import CharacterModel from "../character/characterModel";
import { range } from "lodash";

const q = range(1, 42).map(x => `
        page${x}: characters(page: ${x}) {
            info {
                count, pages, next, prev
            }
            results {
                id, name, image
            }
        }
`).join(",")

const charactersQuery = gql`query characters {${q}}`

export default function Characters() {

	const [chars, setChars] = useState<CharacterModel[]>([])

	const { loading, error, data } = useQuery(charactersQuery)

	if (loading) return <p>Loading characters...</p>;
	if (error) return <p>Error :(</p>;

	if (chars.length === 0) {
		let allResults = Object.values(data).reduce((acc: any, res: any) =>
			acc.concat(res.results), []) as CharacterModel[];
		setChars(allResults)
	}

	return (
		<CharactersView characters={chars}/>
	)
}