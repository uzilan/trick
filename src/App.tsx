import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Box from "./box/box";
import Portal from "./portal/portal";
import Character from "./character/character";

function App() {


	return (
		<div className="App">
			<Router>
				<div>
					<nav>
						<Routes>
							<Route path="/" element={<Box/>}/>
							<Route path="/portal" element={<Portal/>}/>
							<Route path="/character/:characterId" element={<Character/>}/>
						</Routes>
					</nav>
				</div>
			</Router>
		</div>
	)
}

export default App;
