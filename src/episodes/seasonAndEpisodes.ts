import EpisodeModel from "../episode/episodeModel";

export default class SeasonAndEpisodes {
	season!: string;
	episodes!: EpisodeModel[]

	constructor(season: string, episodes: EpisodeModel[]) {
		this.season = season
		this.episodes = episodes
	}
}