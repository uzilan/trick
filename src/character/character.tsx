import CharacterView from "./characterView";
import { gql, useQuery } from "@apollo/client";
import Navigation from "../Navigation";

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

interface Props {
	characterId: number
	setNavigation: (navigation: Navigation) => void
}

function Character({ characterId, setNavigation }: Props) {
	const { loading, error, data } = useQuery(characterQuery, {
		variables: {
			id: characterId,
		},
	})

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return (
		<CharacterView characterModel={data.character} setNavigation={setNavigation}/>
	)
}

export default Character;