import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Box from "./box/box";
import Portal from "./portal/portal";
import Character from "./character/character";
import Episode from "./episode/episode";
import Location from "./location/location";
import Back from "./portal/back";
import Meeseeks from "./search/meeseeks";
import Search from "./search/search";

function App() {
	useEffect(() => {
		document.title = "Trick"
	}, []);


	return (
		<div className="App">
			<Router>
				<div>
					<nav>
						<Routes>
							<Route path="/" element={<Box/>}/>
							<Route path="/portal" element={<Portal/>}/>
							<Route path="/character/:characterId" element={<Character/>}/>
							<Route path="/episode/:episodeId" element={<Episode/>}/>
							<Route path="/location/:locationId" element={<Location/>}/>
							<Route path="/search" element={<Search/>}/>
						</Routes>
					</nav>
				</div>
				<Meeseeks/>
				<Back/>
			</Router>
		</div>
	)
}

export default App;
