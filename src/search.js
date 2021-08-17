import axios from "axios";
import React from "react";
import "./css/song.css";
export default class SongSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      tracks: [],
			srchtext: "",
    };
    this.search = this.search.bind(this);
		this.textChange=this.textChange.bind(this);
  }
	
	textChange(text){
		
		this.setState({srchtext:text})
		
		
	}
	
	
  async search() {
    var options = {
      method: "GET",
      url: "https://shazam-core.p.rapidapi.com/v1/tracks/search",
      /*params: { query: this.state.srchtext },*/
      params: { query: "wellerman" },
      headers: {
        "x-rapidapi-key": "",
        "x-rapidapi-host": "shazam-core.p.rapidapi.com",
      },
    };
    const response = await axios.request(options);
    const songs = response.data;
    this.setState({ tracks: songs });
    //console.log("search in progress",songs)
  }

  render() {
    console.log(this.state.tracks);
    return (
      <>
        <input type="text" onChange={this.textChange}/> {/*{} for js*/}
        <button onClick={this.search}>search</button>
        {this.state.tracks.map((track) => (
          <div className="song">
						
            <div className="title"> {track.heading.title} </div>
            <div className="artist"> {track.heading.subtitle} </div>
            <div className="logo"><img src={track.images.default} /></div>
          </div>
        ))}
      </>
    );
  }
}
