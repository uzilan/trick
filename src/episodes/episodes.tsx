import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import EpisodeModel from "../episode/episodeModel";
import "./episodes.css"
import EpisodesView from "./episodesView";
import { range } from "lodash";

const q = range(1, 4).map(x => `
       page${x}: episodes(page: ${x}) {
            info{
                count, pages, next, prev
            }
            results {
                id, name, air_date, episode, characters {
                    id, name, image
                }
            }
        }
`).join(",")

const episodesQuery = gql`query episodes {${q}}`

export default function Episodes() {

	const [episodes, setEpisodes] = useState<EpisodeModel[]>([])

	const { loading, error, data } = useQuery(episodesQuery)

	if (loading) return <p>Loading episodes...</p>;
	if (error) return <p>Error :(</p>;

	if (episodes.length === 0) {
		let allResults = Object.values(data).reduce((acc: any, res: any) =>
			acc.concat(res.results), []) as EpisodeModel[];
		setEpisodes(allResults);
	}

	return (
		<EpisodesView episodes={episodes}/>
	)


}