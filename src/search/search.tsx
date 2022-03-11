import React, { useState } from "react";
import "./meeseeks.css"
import SearchCharacter from "./searchCharacter";


export default function Search() {

	const [results, setResults] = useState<any>()

	function searchCharacter(event: any) {
		event.preventDefault();
		setResults(<SearchCharacter
				name={event.target.name.value}
				status={event.target.status.value}
				species={event.target.species.value}
				type={event.target.type.value}
				gender={event.target.gender.value}
			/>,
		)
	}

	function searchName(name: string) {
		setResults(<SearchCharacter name={name} status="" species="" type="" gender=""/>)
	}

	function searchSpecies(species: string) {
		setResults(<SearchCharacter name="" status="" species={species} type="" gender=""/>)
	}

	function searchType(type: string) {
		setResults(<SearchCharacter name="" status="" species="" type={type} gender=""/>)
	}

	function reset() {
		setResults(null)
	}

	return (
		<div>
			<div className="search-wrapper">
				<img src={require("../images/meeseeks.png")} alt="search"
				     className="meeseeks-search"/>
				<form onSubmit={searchCharacter} onReset={reset}>
					<p className="left"><h1>Search character</h1></p>
					<table>
						<tbody>
						<tr>
							<td>name:</td>
							<td><input name="name" placeholder="e.g. Rick"/></td>
						</tr>
						<tr>
							<td>species:</td>
							<td><input name="species" placeholder="e.g. Alien"/></td>
						</tr>
						<tr>
							<td>type:</td>
							<td><input name="type" placeholder="e.g. Fish"/></td>
						</tr>
						<tr>
							<td>status:</td>
							<td><select name="status">
								<option value="">---</option>
								<option value="Alive">alive</option>
								<option value="Dead">dead</option>
								<option value="Unknown">unknown</option>
							</select></td>
						</tr>
						<tr>
							<td>gender:</td>
							<td><select name="gender">
								<option value="">---</option>
								<option value="Female">female</option>
								<option value="Male">male</option>
								<option value="Unknown">unknown</option>
							</select></td>
						</tr>
						</tbody>
					</table>

					<p className="right">
						<button type={"reset"} className="right">reset</button>
						<button type={"submit"} className="right">search</button>
					</p>
					<a href="javascript:void(0)" onClick={() => searchName("rick")}>Ricks</a>,&nbsp;
					<a href="javascript:void(0)" onClick={() => searchName("morty")}>Mortys</a>,&nbsp;
					<a href="javascript:void(0)" onClick={() => searchName("summer")}>Summers</a>,&nbsp;
					<a href="javascript:void(0)" onClick={() => searchName("beth")}>Beths</a>,&nbsp;
					<a href="javascript:void(0)" onClick={() => searchName("jerry")}>Jerrys</a>,<br/>
					<a href="javascript:void(0)" onClick={() => searchSpecies("alien")}>Aliens</a>,&nbsp;
					<a href="javascript:void(0)" onClick={() => searchName("person")}>Persons</a>,&nbsp;
					<a href="javascript:void(0)" onClick={() => searchName("scarecrow")}>Scarecrows</a>,&nbsp;
					<a href="javascript:void(0)" onClick={() => searchType("monogatron")}>Monogatrons</a>,&nbsp;
				</form>
			</div>
			{results}
		</div>
	)
}