import React from "react";

import axios from "axios";

import "./css/song.css";
export default class SongSearch extends React.Component{
	constructor(){
		super()
	}
	search(){

		var options = {
		  method: 'GET',
		  url: 'https://shazam-core.p.rapidapi.com/v1/tracks/search',
		  params: {query: 'Wellerman'},
		  headers: {
			'x-rapidapi-key': '',
			'x-rapidapi-host': 'shazam-core.p.rapidapi.com'
		  }
		};

		axios.request(options).then(function (response) {
			console.log(response.data);
		}).catch(function (error) {
			console.error(error);
		});
		console.log("search in progress")
	}
	render(){
			
		return (
			<>
				<input type="text" />
				<button onClick={this.search}>search</button>
			</>
		);
	}
	
}
