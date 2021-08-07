import React from "react";

import axios from "axios";
import Button from "@material-ui/core/Button";

import "./css/song.css";

export default class SongDetails extends React.Component {
  constructor() {
    super();
    this.state = {
      term: "",
    };

    this.search = this.search.bind(this);
  }

  search() {
    const { term } = this.state;
    var options = {
      method: "GET",
      url: "https://shazam.p.rapidapi.com/search",
      params: { term, locale: "en-US", offset: "0", limit: "5" },
      headers: {
        "x-rapidapi-key": "<my-key>",
        "x-rapidapi-host": "shazam.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  render() {
    return (
      <div>
        <div className="search">
          <input
            className="search-input"
            type="text"
            onChange={(e) =>
              this.setState({ term: e.target.value }, () =>
                console.log(this.state.term)
              )
            }
          ></input>
          <button
            className="btn btn-primary search-button clean-button"
            onClick={this.search}
          >
            Search
          </button>
        </div>
        <div className="title">
          <h1>Kiss The Rain</h1>
          <span className="artist">
            <em>Billie Myers</em>
          </span>
        </div>
        <div>
          <img src="https://is3-ssl.mzstatic.com/image/thumb/Music114/v4/02/74/5a/02745ac2-cbfb-a90a-b970-7449be5d4c42/06UMGIM10734.rgb.jpg/400x400cc.jpg"></img>
        </div>

        <div>
          <audio controls>
            <source
              src="https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/a7/44/d7/a744d7c6-d06c-17a2-ad19-cd01b46a8cbd/mzaf_8512763237108905867.plus.aac.ep.m4a"
              type="audio/mp3"
            />
          </audio>
        </div>

        <div>
          <Button
            variant="contained"
            onClick={() => {
              window.location =
                "https://www.shazam.com/track/20066955/kiss-the-rain";
            }}
          >
            Listen on Shazam
          </Button>
        </div>
      </div>
    );
  }
}
