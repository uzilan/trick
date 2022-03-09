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

	function reset() {
		setResults(null)
	}

	return (
		<div>
			<div className="search-wrapper">
				<img src={require("../images/meeseeks.png")} alt="search"
				     className="meeseeks-search"/>
				<form onSubmit={searchCharacter} onReset={reset}>
					<p className="left">Search character</p>
					<table>
						<tbody>
						<tr>
							<td>name:</td>
							<td><input name="name" placeholder="Rick"/></td>
						</tr>
						<tr>
							<td>species:</td>
							<td><input name="species" placeholder="Alien"/></td>
						</tr>
						<tr>
							<td>type:</td>
							<td><input name="type" placeholder="Fish"/></td>
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
				</form>
			</div>
			{results}
		</div>
	)
}