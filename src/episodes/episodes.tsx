import { gql, useQuery } from "@apollo/client";
import { useState } from "react";
import EpisodeModel from "../episode/episodeModel";
import "./episodes.css"
import EpisodesView from "./episodesView";

const episodesQuery = gql`
    query episodes {
        page1: episodes(page: 1) {
            info{
                count, pages, next, prev
            }
            results {
                id, name, air_date, episode, characters {
                    id, name, image
                }
            }
        },
        page2: episodes(page: 2) {
            info{
                count, pages, next, prev
            }
            results {
                id, name, air_date, episode, characters {
                    id, name, image
                }
            }
        },
        page3: episodes(page: 3) {
            info{
                count, pages, next, prev
            }
            results {
                id, name, air_date, episode, characters {
                    id, name, image
                }
            }
        },
    }
`
export default function Episodes() {

	const [episodes, setEpisodes] = useState<EpisodeModel[]>([])

	const { loading, error, data } = useQuery(episodesQuery)

	if (loading) return <p>Loading episodes...</p>;
	if (error) return <p>Error :(</p>;

	if (episodes.length === 0) {
		let allResults = [
			...data.page1.results,
			...data.page2.results,
			...data.page3.results,
		];

		setEpisodes(allResults);
	}

	return (
		<EpisodesView episodes={episodes}/>
	)


}