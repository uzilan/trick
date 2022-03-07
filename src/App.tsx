import React, { useState } from 'react';
import './App.css';
import Characters from './characters/characters';
import Character from "./character/character";

function App() {
	const [navigation, setNavigation] = useState({ page: "characters", args: {} as any })

	switch (navigation.page) {
		case "characters":
			return (
				<div className="App">
					<Characters setNavigation={setNavigation}/>
				</div>
			)
		case "character":
			const characterId = navigation.args.characterId;

			return (<div className="App">
				<Character characterId={characterId} setNavigation={setNavigation}/>
			</div>)

		default:
			return (<div>Something went wrong :(</div>)
	}
}

export default App;
