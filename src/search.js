import axios from "axios";
import React from "react";
import "./css/song.css";
export default class SongSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      tracks: [],
    };
    this.search = this.search.bind(this);
  }

  async search() {
    var options = {
      method: "GET",
      url: "https://shazam-core.p.rapidapi.com/v1/tracks/search",
      params: { query: "Wellerman" },
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
        <input type="text" />
        <button onClick={this.search}>search</button>
        {this.state.tracks.map((track) => (
          <div>
            <h1> {track.heading.title} </h1>
            <h1> {track.heading.subtitle} </h1>
            <img src={track.images.default} />
          </div>
        ))}
      </>
    );
  }
}
