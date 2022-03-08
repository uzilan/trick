import { Link } from "react-router-dom";
import SeasonAndEpisodes from "./seasonAndEpisodes";
import _ from "lodash";
import EpisodeModel from "../episode/episodeModel";

interface Props {
	episodes: EpisodeModel[]
}

export default function EpisodesView({ episodes }: Props) {
	const eps = _.chain(episodes)
	.groupBy(ep => ep.episode.substring(0, 3))
	.map((ep, se) => new SeasonAndEpisodes(se as string, ep as EpisodeModel[]))
	.value()

	const seasons = eps.map(pair => {
		const eps = pair.episodes.map(ep =>
			<li>
				<Link to={`/episode/${ep.id}`}>
					{ep.name}
				</Link>
			</li>)
		return (
			<div>
				{pair.season}
				<ul className="season">
					{eps}
				</ul>
			</div>)
	})

	return (
		<div className="episodes-list">{seasons}</div>
	)
}